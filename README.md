# Alexa Horoscope Workshop

## Workshop Goals
Complete our Horoscope sample skill by
* Creating a HoroscopeForSign Intent which includes a sign slot
* Add a response handler to the code which handles the new intent

## Setup instructions (for macOS)
* Install Node 8.10.0
* [Install nvm](http://nvm.sh) (if you need to switch between node versions)
* [Install npm](https://www.npmjs.com/get-npm) 
* Create [Alexa Developer Console](https://developer.amazon.com) account
* Create a new skill on the Alexa Developer Console
    * Take note of the skill ID (you will need this later)
* Download the sample project from Git
* Navigate to `lambda/custom` and run `npm install`
* Open `lambda/custom/lib/constants.js` and set the `APP_ID` variable to the skill ID from above

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
* Navigate to your skill on the [Alexa Developer Console](developer.amazon.com)
* In the build tab, do the following:
    * Navigate to the `Endpoints` section
        * Select `HTTPS`
        * Input the bespoken-tools URL displayed in the last step
    * Navigate to the `Invocation` section and add your desired invocation name 
    * Navigate to the `JSON Editor` section and upload model JSON file Alexa console

## Test your skill
Navigate to Test tab on the [Alexa Developer Console](developer.amazon.com), and use the web interface to test your skill

## Helpful links
* [Custom skill documentation](https://developer.amazon.com/docs/custom-skills/understanding-custom-skills.html)
* [Slot type documentation](https://developer.amazon.com/docs/custom-skills/slot-type-reference.html)
* [Bespoken tools tutorial](http://docs.bespoken.io/en/latest/tutorials/tutorial_lambda_local/)
* [alexa-tools library developed by Hearst ET](https://github.com/Hearst-DD/alexa-tools)
* https://www.npmjs.com/~hearst-et
