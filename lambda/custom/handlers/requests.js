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
    responseBuilder = require( "alexa-toolkit" ).response.builder,
    utils = require( "alexa-toolkit" ).utils,
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

        let responseObj = requestAttributes.t( stringKeys.HOROSCOPE.PROMPT );

        return responseBuilder.ask( handlerInput, responseObj );
    }
};

// User is asking to hear the horoscope for a specific sign, fetch the horoscope and play it for thems
const HoroscopeForSignHandler = {
    canHandle( handlerInput ) {
        const request = handlerInput.requestEnvelope.request;

        return request.type === e.REQUEST_TYPE.INTENT &&
            ( request.intent.name === e.INTENT.HOROSCOPE_FOR_SIGN || request.intent.name === e.INTENT.SIGN );
    },
    async handle( handlerInput ) {
        console.log( "[HoroscopeForSignHandler]" );

        // Get inputted sign from request
        const signSlot = handlerInput.requestEnvelope.request.intent.slots.sign;

        // Check if no slot value was returned
        if ( signSlot.value === undefined ) {
            // present user error
            return defaultResponses.unknownSign( handlerInput );
        }

        signSlot.value = stringUtils.toTitleCase( signSlot.value );

        const signType = horoscopeUtility.isSign( signSlot.value );

        if ( signType === constants.errorCode.UNSUPPORTED || signType === constants.errorCode.UNKNOWN ) {
            // Unknown sign returned
            return defaultResponses.unknownSign( handlerInput );
        } else {
            const requestAttributes = handlerInput.attributesManager.getRequestAttributes();

            try {
                // Fetch horoscope data for sign
                let horoscope = await horoscopeService.fetchBySign( signSlot.value );

                let replaceObj = {
                    sign: signType,
                    horoscopeResponse: horoscope
                };

                let responseObj = requestAttributes.t( stringKeys.HOROSCOPE.REQUEST, replaceObj );

                responseObj.display = horoscopeUtility.buildHoroscopeDisplay( signSlot.value, horoscope );

                return responseBuilder.ask( handlerInput, responseObj );
            } catch ( error ){
                console.error( error );

                let responseObj = requestAttributes.t( stringKeys.HOROSCOPE.ERROR );

                return responseBuilder.ask( handlerInput, responseObj );
            }
        }
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
