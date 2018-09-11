'use strict';

process.env['AWS_REGION'] = 'us-east-1';

const Alexa = require( "ask-sdk-core" ),
    persistence = require( "ask-toolkit" ).persistence,
    constants = require( "./lib/constants" ),
    stringsEn = require( "./strings/en-us" ),
    errorHandlers = require( "./handlers/error" ),
    requestHandlers = require( "./handlers/requests" );

// combine language string files
const strings = {
    "en-GB": stringsEn,
    "en-IN": stringsEn,
    "en-US": stringsEn
};

const localization = require( "ask-toolkit" ).localization( strings );

const skillBuilder = Alexa.SkillBuilders.custom();

exports.handler = async ( event, context, callback ) => {
    console.log( JSON.stringify( event ) );

    try {
        let persistanceAdapter = persistence.dynamoAdapter( constants.DYNAMODB_TABLE );

        const skill = await skillBuilder
            .withSkillId( constants.APP_ID )

            .withPersistenceAdapter( persistanceAdapter )

            .addRequestHandlers( ...requestHandlers )
            .addErrorHandlers( ...errorHandlers )

            .addRequestInterceptors(
                localization.requestInterceptor
            )
            .addResponseInterceptors(
                persistence.responseInterceptor
            )
            .create();

        const response = await skill.invoke( event, context );

        return callback( null, response );
    } catch( error ) {
        console.error( "Initialization Error ", error );

        return callback( error, null );
    }
};
