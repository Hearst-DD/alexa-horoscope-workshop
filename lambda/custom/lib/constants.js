"use strict";

/**
 * CONSTANTS
 *
 * Horoscope Signs:
 * - Aquarius (January 20 - February 18)
 * - Pisces (February 19 - March 20)
 * - Aries (March 21 - April 19)
 * - Taurus (April 20 - May 20)
 * - Gemini (May 21 - June 20)
 * - Cancer (June 21 - July 22)
 * - Leo (July 23 - August 22)
 * - Virgo (August 23 - September 22)
 * - Libra (September 23 - October 22)
 * - Scorpio (October 23 - November 21)
 * - Sagittarius (November 22 - December 21)
 * - Capricorn (December 22 - January 19)
 */

const constants = {
    APP_ID: process.env.APP_ID,

    API_KEY: null,
    API_HOST: "elle.hearst.io",
    API_PATH: "/api/v1/articles",
    VOICE_CLIENT: "Amazon",

    ANALYTICS_TOKEN: process.env.ANALYTICS_TOKEN,

    DYNAMODB_TABLE: process.env.DYNAMODB_TABLE,

    ENVIRONMENT: process.env.ENVIRONMENT,

    S3_BUCKET: process.env.S3_BUCKET,

    // Error codes
    errorCode: {
        UNKNOWN: "unknown",
        UNSUPPORTED: "unsupported"
    }
};

module.exports = constants;
