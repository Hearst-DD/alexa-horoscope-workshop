"use strict";

/**
 * ERROR HANDLERS
 */
const defaultResponses = require( "./defaultResponses" );

const ErrorHandler = {
    canHandle() {
        return true;
    },
    handle( handlerInput, error ) {
        console.error( `Error handled: ${error.message} `, error );

        defaultResponses.fallback( handlerInput );
    },
};

module.exports = [
    ErrorHandler
];
