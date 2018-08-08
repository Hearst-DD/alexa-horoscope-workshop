'use strict';

const Alexa = require( "ask-sdk-core" ),
    analytics = require( "alexa-toolkit" ).analytics,
    persistence = require( "alexa-toolkit" ).persistence,
    c = require( "./lib/constants" ),
    stringsEn = require( "./strings/en-us" ),
    errorHandlers = require( "./handlers/error" ),
    requestHandlers = require( "./handlers/requests" );

// combine language string files
const strings = {
    "en-GB": stringsEn,
    "en-IN": stringsEn,
    "en-US": stringsEn
};

const localization = require( "alexa-toolkit" ).localization( strings );

const skillBuilder = Alexa.SkillBuilders.custom();

exports.handler = async ( event, context, callback ) => {
    console.log( JSON.stringify( event ) );

    try {
        let persistanceAdapter = persistence.dynamoAdapter( c.DYNAMODB_TABLE );

        const skill = await skillBuilder
            .withSkillId( c.APP_ID )

            .withPersistenceAdapter( persistanceAdapter )

            .addRequestHandlers( ...requestHandlers )
            .addErrorHandlers( ...errorHandlers )

            .addRequestInterceptors(
                analytics.sendRequestTracking,
                localization.requestInterceptor
            )
            .addResponseInterceptors(
                analytics.sendResponseTracking,
                persistence.responseInterceptor
            )
            .create();

        const response = await skill.invoke( event, context );

        return callback( null, response  );
    } catch( error ) {
        console.error( "INITIALIZATION ERROR ", error );

        return callback( error, null );
    }
};
