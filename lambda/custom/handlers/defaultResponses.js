"use strict"

/**
 * DEFAULT HELPERS
 */
const responseBuilder = require( "alexa-toolkit" ).response.builder,
    str = require( "../strings/stringKeys" );

const defaultHelpers = function() {
    return {
        unknownSign: ( handlerInput ) => {
            console.log( "[UnknownSign]" );

            const requestAttributes = handlerInput.attributesManager.getRequestAttributes();

            return responseBuilder.ask( handlerInput, requestAttributes.t( str.HOROSCOPE.UNKNOWN_SIGN ) );
        },

        exit: async ( handlerInput ) => {
            console.log( "[Exit]" );

            const requestAttributes = handlerInput.attributesManager.getRequestAttributes();

            return responseBuilder.tell( handlerInput, requestAttributes.t( str.EXIT ) );
        },

        fallback: async ( handlerInput ) => {
            console.log( "[Fallback]" );

            const requestAttributes = handlerInput.attributesManager.getRequestAttributes();

            return responseBuilder.ask( handlerInput, requestAttributes.t( str.AMAZON.FALLBACK ) );
        },

        generalError: ( handlerInput, error ) => {
            console.error( "ERROR::General - ", error || "" );

            const requestAttributes = handlerInput.attributesManager.getRequestAttributes();

            return responseBuilder.tell( handlerInput, requestAttributes.t( str.ERROR ) );
        }
    };
}();

module.exports = defaultHelpers;
