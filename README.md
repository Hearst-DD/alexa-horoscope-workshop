# Alexa Horoscope Workshop

## Workshop Goals
Complete our Horoscope sample skill by
* Creating a HoroscopeForSign Intent which includes a sign slot
* Add a response handler to the code which handles the new intent

## Setup instructions (for macOS)
* [Install nvm](http://nvm.sh) (if you need to switch between node versions)
* Install Node 8.10.0
* [Install npm](https://www.npmjs.com/get-npm) 
* Create [Alexa Developer Console](https://developer.amazon.com) account
* Create a new skill on the Alexa Developer Console
    * Input your selected skill name 
    * Select the `Custom` skill model
    * Select `Start From Scratch`
    * Navigate back to the `Your Skills` section, and take note of skill ID for your new skill (you will need this later)
* Download the sample project from Git
* Navigate to `lambda/custom` and run `npm install`
* Open `lambda/custom/lib/constants.js` and set the `YOUR_APP_ID` variable to the skill ID from above
* Open `models/en-US.js` and set the `YOUR_INVOCATION_NAME` to your desired invocation name (The default is the skill name)

## How to run the skill
In production, Alexa skill code typically runs on a lambda function. For development this is not very practical as you cannot easily change and debug your code on lambda. 

To run code in development we use a library called [bespoken-tools](https://bespoken.io/). It allows us to run our code locally by routing Alexa requests to our local machines. 

There are two approaches that you can use to run the project for this workshop:
* Using Webstorm
    * Copy the runConfiguration folder from the sample project into .idea/runConfigurations
    * Select the new configuration from the top menu bar, and click Run or Debug 
* Using the Command line
    * Install bespoken-tools globally `npm install -g bespoken-tools`
    * Navigate to `lambda/custom`
    * Run this command on the command line `AWS_REGION="us-east-1"`
    * Start the skill using bespoken tools by running the following command `bst proxy lambda index.js --verbose`
    
If everything is running correctly, bespoken-tools should output something like the following:
```
Your public URL for accessing your local service:
https://sick-huxley-JuRHxZ.bespoken.link
```
This URL is where the Alexa Skills kit will need to route requests to. 

## Setup on Alexa Developer Console
* Navigate to your skill on the [Alexa Developer Console](https://developer.amazon.com)
* In the build tab, do the following:
    * Navigate to the `Endpoints` section
        * Select `HTTPS`
        * Input the bespoken-tools URL displayed in the last step
        * Select `My development endpoint is a sub-domain of a domain that has a wildcard certificate from a trusted certificate authority`
        * Select `Save Endpoints` at the top of the page    
    * Navigate to the `JSON Editor` section 
        * Upload `model/en-US.json`
        * Click `Save Model` and then click `Build Model`
        * Once the build is completed and successful, move on to the next step

## Test your skill
Navigate to Test tab on the [Alexa Developer Console](developer.amazon.com)
* Enable testing using the toggle on the top of the page
* Test if you can communicate with the skill running locally. For example, enter the following into the input field: `open YOUR_INVOCATION_NAME`

## Workshop 
### Add HoroscopeForSign Intent with a Sign slot in your models
1. Define a `Sign` custom slot in `models/en-US.json`
2. Define `HoroscopeForSign` intent in `models/en-US.json` that utilizes the `Sign` slot 
3. Add your invocation name at the top of the models file under `invocationName`
4. Upload and build your modified models file to the Alexa Developer console
### Add HoroscopeForSign Response Handler
1. Define a `HoroscopeForSign` ResponseHandler in `lambda/custom/handlers/responses.js`. 
    * Within your handler, use the following to access the inputted slot: `handlerInput.requestEnvelope.request.intent.slots.YOUR_SLOT_NAME`
    * Make sure to validate the slot value, responding to the user with an error if necessary 
    * Use `horoscopeService.fetchBySign()` to fetch the horoscope content for the inputted sign.
    * Add any required string responses in `lambda/custom/strings/en-us.js`
    * Remember that you can use ```const requestAttributes = handlerInput.attributesManager.getRequestAttributes(); const response = requestAttributes.t("YOUR_STRING_KEY", replaceObj)``` to fetch strings and make string replacements
2. Run your skill (following the instructions above) and make sure it responds correctly using the Test tab in the Alexa Developer Console
### Add Visuals to the HoroscopeForSign Response
1. In the [Alexa Developer Console](https://developer.amazon.com), Navigate to the `Interfaces` section. Enable `Display Interface`
2. In the strings file `lambda/custom/strings/en-us.js`, add display data to the HoroscopeForSign strings (https://github.com/Hearst-DD/ask-toolkit/blob/master/README.md#objects)
3. Run your skill and test that the visuals show up as desired using the Test tab in the Alexa Developer Console.

## Helpful links
* [Custom skill documentation](https://developer.amazon.com/docs/custom-skills/understanding-custom-skills.html)
* [Slot type documentation](https://developer.amazon.com/docs/custom-skills/slot-type-reference.html)
* [Bespoken tools tutorial](http://docs.bespoken.io/en/latest/tutorials/tutorial_lambda_local/)
* [alexa-tools library developed by Hearst ET](https://github.com/Hearst-DD/alexa-tools)
* https://www.npmjs.com/~hearst-et
