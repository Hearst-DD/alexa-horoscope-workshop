const languageStrings = {
    "translation": {
        "appTitle": "ELLE Horoscopes by The Astro Twins",
        "welcome": {
            "card": {
                "title": "Today's Horoscope",
                "output": "ELLE Horoscopes by The Astro Twins. What sign do you want the horoscope for?"
            },
            "speech": {
                "output": "<p>ELLE Horoscopes by The Astro Twins.</p> <p>What sign do you want the horoscope for?</p>",
                "reprompt": "With ELLE Horoscopes by The Astro Twins, you can get your horoscope for the day.  For example, you could say what is the horoscope for Gemini. Now, which sign do you want?"
            },
            "display": {
                "backButton": "HIDDEN",
                "backgroundImage": {
                    "url": "display/1024x600/background.png",
                    "width": 1024,
                    "height": 600
                },
                "hint": "Try \"Gemini\" or \"Aquarius\"",
                "template": "BodyTemplate1",
                "text": {
                    "primary": {
                        "type": "RichText",
                        "text": "<font size=\"6\"><b>ELLE Horoscopes by The Astro Twins.</b>What sign do you want the horoscope for?</font>"
                    }
                },
                "token": "todayHoroscope"
            }
        },
        "help": {
            "speech": {
                "output": "With ELLE Horoscopes by The Astro Twins, you can get your horoscope for the day. For example, you can say what is the horoscope for Gemini. Now, which sign are you?",
                "reprompt": "Which sign do you want to hear?"
            }
        },
        "fallback": {
            "card": {
                "title": "ELLE Horoscopes by The Astro Twins",
                "output": "I didn't understand that.  Please try again."
            },
            "speech": {
                "output": "I'm not sure how to help you with that. Please try again.",
                "reprompt": "I'm not sure how to help you with that. Please try again."
            }
        },
        "exit": {
            "speech": {
                "output": "Goodbye"
            },
            "display": {
                "backButton": "HIDDEN",
                "backgroundImage": {
                    "url": "display/1024x600/background.png",
                    "width": 1024,
                    "height": 600
                },
                "hint": "Try \"Gemini\" or \"Aquarius\"",
                "template": "BodyTemplate1",
                "text": {
                    "primary": {
                        "type": "RichText",
                        "text": "<font size=\"7\"><b>Goodbye.</b></font>"
                    }
                },
                "token": "goodbye"
            }
        },
        "error": {
            "card": {
                "title": "ELLE Horoscopes by The Astro Twins",
                "output": "Sorry, an error occurred."
            },
            "speech": {
                "output": "Sorry, an error occurred",
                "reprompt": "Sorry, an error occurred"
            }
        },
        "horoscope": {
            "response": {
                "card": {
                    "title": "Horoscope for {{sign}}"
                },
                "speech": {
                    "output": "{{horoscopeResponse}} <break time=\"1s\" /> You can either give me a new sign or say \'goodbye\' to exit. What would you like?",
                    "reprompt": "I didn't hear you.  You can either give me a new sign or say 'goodbye' to exit. What would you like?"
                },
                "display": {
                    "backButton": "HIDDEN",
                    "backgroundImage": {
                        "url": "display/1024x600/background.png",
                        "width": 1024,
                        "height": 600
                    },
                    "hint": "Try \"Gemini\" or \"Aquarius\"",
                    "template": "BodyTemplate1",
                    "text": {
                        "primary": {
                            "type": "RichText",
                            "text": "<font size=\"7\"><b>You can either give me a new sign or say 'goodbye' to exit. What would you like?.</b></font>"
                        }
                    },
                    "token": "horoscopeResponse"
                }
            },
            "prompt": {
                "card": {
                    "title": "ELLE Horoscopes by The Astro Twins",
                    "output": "What sign are you?"
                },
                "speech": {
                    "output": "What sign are you?",
                    "reprompt": "Please tell me what sign you are?"
                },
                "display": {
                    "backButton": "HIDDEN",
                    "backgroundImage": {
                        "url": "display/1024x600/background.png",
                        "width": 1024,
                        "height": 600
                    },
                    "hint": "Try \"Gemini\" or \"Aquarius\"",
                    "template": "BodyTemplate1",
                    "text": {
                        "primary": {
                            "type": "RichText",
                            "text": "<font size=\"7\"><b>What sign are you?</b></font>"
                        }
                    },
                    "token": "whatSign"
                }
            },
            "unknownSign": {
                "speech": {
                    "output": "I don't recognize that sign, please try again.",
                    "reprompt": "I don't recognize that sign, please tell me your sign or say goodbye."
                },
                "display": {
                    "backButton": "HIDDEN",
                    "backgroundImage": {
                        "url": "display/1024x600/background.png",
                        "width": 1024,
                        "height": 600
                    },
                    "hint": "Try \"Gemini\" or \"Aquarius\"",
                    "template": "BodyTemplate1",
                    "text": {
                        "primary": {
                            "type": "RichText",
                            "text": "<font size=\"7\"><b>I don't recognize that sign, please try again.</b></font>"
                        }
                    },
                    "token": "dontRecognize"
                }
            },
            "error": {
                "speech": {
                    "output": "There is a problem connecting to Elle at this time. Please try again later.",
                },
                "display": {
                    "backButton": "HIDDEN",
                    "backgroundImage": {
                        "url": "display/1024x600/background.png",
                        "width": 1024,
                        "height": 600
                    },
                    "template": "BodyTemplate1",
                    "text": {
                        "primary": {
                            "type": "RichText",
                            "text": "<font size=\"7\">There is a problem connecting to Elle at this time. Please try again later</font>"
                        }
                    },
                    "token": "horoscopeError"
                }
            }
        }
    }
};

module.exports = languageStrings;
