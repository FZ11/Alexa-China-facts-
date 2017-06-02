'use strict';
var Alexa = require('alexa-sdk');

var APP_ID = "..."; //OPTIONAL: replace with "amzn1.echo-sdk-ams.app.[your-unique-value-here]";
var SKILL_NAME = 'China Facts';

/**
 * Array containing space facts.
 */
var FACTS = [
    "China is officially known as the People's Republic of China.",
    "China is the 3rd largest country by area at 9,706,961 square kilometer",
    "There are many different languages spoken in China, including Mandarin, Yue, Wu, Minbei, Minnan, Xiang, Gan and Hakka.",
    "The famous Giant Panda is found near the Yangtze River in China.",
    "The summit of Mt. Everest, the highest mountain in the world, marks the border between China and Nepal.",
    "The Yangtze River in China is the fourth longest river in the world and reaches 3,602 miles in length. Also, the Yellow River is the sixth longest, stretching 2,900 miles.",
    "China has the second largest economy in the world, right after the USA.",
    "The Great Wall of China is the largest man-made structure in the world, extending 8,850 kilometer which is 5,500 miles.",
    "Fortune cookies are not actually a traditional Chinese custom. They were invented by an employee in the Key Heong noodle factory in San Francisco.",
    "Ping-pong was not invented in China, even though it is one of China’s most popular games. It started in Britain, where it’s called table tennis.",
    "Not every Chinese eats dogs. Most of Chinese love dogs",
    "General Tso's chicken is not an authentic Chinese dish",
    "The most common swear word is Tsao ni ma in China",




    
];

exports.handler = function(event, context, callback) {
    var alexa = Alexa.handler(event, context);
    alexa.APP_ID = APP_ID;
    alexa.registerHandlers(handlers);
    alexa.execute();
};

var handlers = {
    'LaunchRequest': function () {
        this.emit('GetFact');
    },
    'GetNewFactIntent': function () {
        this.emit('GetFact');
    },
    'GetFact': function () {
        // Get a random China fact from the space facts list
        var factIndex = Math.floor(Math.random() * FACTS.length);
        var randomFact = FACTS[factIndex];

        // Create speech output
        var speechOutput = "Here's the fact about China: " + randomFact;

        this.emit(':tellWithCard', speechOutput, SKILL_NAME, randomFact)
    },
    'AMAZON.HelpIntent': function () {
        var speechOutput = "You can say tell me a China fact, or, you can say exit... What can I help you with?";
        var reprompt = "What can I help you with?";
        this.emit(':ask', speechOutput, reprompt);
    },
    'AMAZON.CancelIntent': function () {
        this.emit(':tell', 'Goodbye!');
    },
    'AMAZON.StopIntent': function () {
        this.emit(':tell', 'Goodbye!');
    }
};