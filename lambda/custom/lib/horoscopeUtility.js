"use strict";

/**
 * Horoscope Utility
 *
 */
const constants = require( "./constants" ),
    displayData = require( "../json/display-en.json" ),
    utils = require( "ask-toolkit" ).utils,

    //strings
    signsCollection = require( "../json/signs-en.json" );

/**
 *  Public Methods
 */
const horoscopeUtility = {
    buildHoroscopeDisplay: function( sign, horoscopeTxt ) {
        let item = {},
            template = utils.get( "display.horoscope", displayData, {} );

        if ( sign && horoscopeTxt ) {
            item = JSON.stringify( template );

            const replaceObj = {
                "{horoscopeImg}": utils.get( "display.signs." + sign + ".bgImg", displayData, "" ),
                "{horoscopeSign}": sign,
                "{horoscopeTxt}": horoscopeTxt
            };

            item =  JSON.parse( utils.replaceAll( item , replaceObj ) );
        }

        return item;
    },

    isSign: function( val ) {
        console.log( "[isSign] " + val );

        let type = utils.checkValInArray( val, signsCollection.supported );

        if ( !type ) {
            if ( utils.checkValInArray( val, signsCollection.unsupported ) ) {
                type = constants.errorCode.UNSUPPORTED;
            } else {
                type = constants.errorCode.UNKNOWN;
            }
        }

        return type;
    }
};

module.exports = horoscopeUtility;

