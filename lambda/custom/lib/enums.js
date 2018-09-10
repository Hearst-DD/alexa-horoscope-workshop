"use strict";

/**
 * ENUMS
 *
 */

const enums = {
    // Requests
    REQUEST_TYPE: {
        LAUNCH: "LaunchRequest",
        INTENT: "IntentRequest",
        SESSION_ENDED: "SessionEndedRequest"
    },

    // Intents
    INTENT: {
        AMAZON: {
            CANCEL: "AMAZON.CancelIntent",
            FALLBACK: "AMAZON.FallbackIntent",
            HELP: "AMAZON.HelpIntent",
            NO: "AMAZON.NoIntent",
            STOP: "AMAZON.StopIntent",
            YES: "AMAZON.YesIntent"
        },
        HOROSCOPE: "HoroscopeIntent",
        HOROSCOPE_FOR_SIGN: "HoroscopeForSignIntent"
    },

    // Slots
    SLOTS: {
        SIGN: "sign"
    }
};

module.exports = enums;
