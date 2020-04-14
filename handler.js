'use strict';

const Tweet = require('tweet');
const Airtable = require('airtable');

module.exports.publishTweet = (event, context, callback) => {

let tweet = Tweet(base);

  const response = {
    statusCode: 200,
    body: JSON.stringify({
      input: event,
    }),
  };

  return callback(null, response);

};
