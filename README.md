# Alexa Horoscope Workshop

## Workshop Goal
Complete our Horoscope sample skill by
  * Creating a HoroscopeForSign Intent which includes a sign slot
  * Add a response handler to the code which handles the new intent

## Setup instructions
* Install Node 8.10.0
* [Install npm](https://www.npmjs.com/get-npm) 
* [Install nvm](http://nvm.sh) (if you need to switch between node versions)
* Create [Alexa Developer Console](developer.amazon.com) account
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
This URL is what the Alexa Skills kit will need to route requests to.

## Setup on Alexa Developer Console
* Navigate back to you new Skill on the developer console
* Navigate to the `Endpoints` section
    * Select `HTTPS`
    * Input the bespoken-tools URL   
* Add invocation term 
* Upload model JSON file Alexa console
* Navigate to Test tab, and use the web interface to test your skill
