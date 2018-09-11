"use strict"

const horoscopeData = require( "../json/horoscopes-en"),
    utils = require( "ask-toolkit" ).utils;

/**
 *  Private Methods
 */

/**
 *  Public Methods
 */
const horoscopeService = {
    fetchBySign: function( sign ) {
        let p = new Promise( ( resolve, reject ) => {

            // In a live product, this would make a request to an external content source to fetch horoscope data for the given sign

            let horoscopeObj = utils.get( sign.toLowerCase(), horoscopeData );

            if ( horoscopeObj ){
                resolve( horoscopeObj );
            } else {
                reject( new Error( "Horoscope not found" ) );
            }
        } );

        return p;
    }
};

module.exports = horoscopeService;
