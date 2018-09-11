"use strict";

/**
 * RESPONSE HANDLERS
 *
 * The order of the elements in teh module.exports array is important.
 * The first intent is matched and used.
 *
 */
const defaultResponses = require( "./defaultResponses" ),
    e = require( "./../lib/enums" ),
    constants = require( "./../lib/constants" ),
    responseBuilder = require( "ask-toolkit" ).response.builder,
    utils = require( "ask-toolkit" ).utils,
    stringKeys = require( "../strings/stringKeys" ),
    stringUtils = require( "../lib/stringUtility" ),
    horoscopeService = require( "../lib/horoscopeService" ),
    horoscopeUtility = require( "../lib/horoscopeUtility" );

/***************************************
 ******** CUSTOM INTENT HANDLERS *******
 ***************************************/

// User is asking to hear his/her horoscope. Prompt them for their sign
const HoroscopeHandler = {
    canHandle( handlerInput ) {
        const request = handlerInput.requestEnvelope.request;

        return request.type === e.REQUEST_TYPE.INTENT &&
            request.intent.name === e.INTENT.HOROSCOPE;
    },
    async handle( handlerInput ) {
        console.log( "[HoroscopeHandler]" );

        const requestAttributes = handlerInput.attributesManager.getRequestAttributes();

        // Fetch response object from en-us.js file
        let responseObj = requestAttributes.t( stringKeys.HOROSCOPE.PROMPT );

        return responseBuilder.ask( handlerInput, responseObj );
    }
};

/******
 *
 * Add HoroscopeForSign code below
 *
 */
const HoroscopeForSignHandler = {
    canHandle( handlerInput ) {
        return false;
    },
    async handle( handlerInput ) {
        console.log( "[HoroscopeForSignHandler]" );

    }
};

/***************************************
 ******** AMAZON INTENT HANDLERS *******
 ***************************************/

const CancelHandler = {
    canHandle( handlerInput ) {
        const request = handlerInput.requestEnvelope.request;

        return request.type === e.REQUEST_TYPE.INTENT
            && request.intent.name === e.INTENT.AMAZON.CANCEL;
    },
    handle( handlerInput ) {
        console.log( "[CancelHandler]" );

        return defaultResponses.exit( handlerInput );
    },
};

const FallbackHandler = {
    canHandle( handlerInput ) {
        const request = handlerInput.requestEnvelope.request;

        return request.type === e.REQUEST_TYPE.INTENT
            && request.intent.name === e.INTENT.AMAZON.FALLBACK;
    },
    handle( handlerInput ) {
        console.log( `[FallbackHandler]` );

        return defaultResponses.fallback( handlerInput );
    },
};

const StopHandler = {
    canHandle( handlerInput ) {
        const request = handlerInput.requestEnvelope.request;

        return request.type === e.REQUEST_TYPE.INTENT
            && request.intent.name === e.INTENT.AMAZON.STOP;
    },
    handle( handlerInput ) {
        console.log( "[StopHandler]" );

        return defaultResponses.exit( handlerInput );
    },
};

const HelpHandler = {
    canHandle( handlerInput ) {
        const request = handlerInput.requestEnvelope.request;

        return request.type === e.REQUEST_TYPE.INTENT
            && request.intent.name === e.INTENT.AMAZON.HELP;
    },
    handle( handlerInput ) {
        console.log( "[HelpHandler]" );

        const requestAttributes = handlerInput.attributesManager.getRequestAttributes();

        return responseBuilder.ask( handlerInput, requestAttributes.t( stringKeys.AMAZON.HELP ) );
    },
};

/***************************************
 ******* SPECIAL INTENT HANDLERS *******
 ***************************************/

const LaunchRequestHandler = {
    canHandle( handlerInput ) {
        const request = handlerInput.requestEnvelope.request;

        return request.type === e.REQUEST_TYPE.LAUNCH ||
            ( request.type === e.REQUEST_TYPE.INTENT && request.intent.name === e.REQUEST_TYPE.LAUNCH );
    },
    handle( handlerInput ) {
        console.log( "[LaunchRequestHandler]" );

        const requestAttributes = handlerInput.attributesManager.getRequestAttributes();

        let responseObj = requestAttributes.t( stringKeys.WELCOME );

        return responseBuilder.ask( handlerInput, responseObj );
    },
};

const SessionEndedRequestHandler = {
    canHandle( handlerInput ) {
        return handlerInput.requestEnvelope.request.type === e.REQUEST_TYPE.SESSION_ENDED;
    },
    handle( handlerInput ) {
        console.log( `Session ended with reason: ${ handlerInput.requestEnvelope.request.reason }` );

        const error = utils.get( "requestEnvelope.request.error", handlerInput );

        if ( error ) {
            console.error( "[ERROR::SessionEnded]  ", error );

            return defaultResponses.generalError( handlerInput, error );
        } else {
            return defaultResponses.exit( handlerInput );
        }
    },
};

module.exports = [
    HoroscopeForSignHandler,
    HoroscopeHandler,
    CancelHandler,
    FallbackHandler,
    HelpHandler,
    StopHandler,
    LaunchRequestHandler,
    SessionEndedRequestHandler
];
