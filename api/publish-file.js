const request = require('request');
const config = require('../config.json');

function publishFile(fileContents) {
  const options = buildRequestOptions(fileContents);

  request(options, function(error, response) {
    if (error) throw new Error(error);
    console.log('Synchronized successfully', response.statusCode);
  });
}

function buildRequestOptions(data) {
  const {organizationId, pageName, apiKey} = config;
  const url = `https://search.cloud.coveo.com/pages/${organizationId}/${pageName}`;
  const options = {
    method: 'POST',
    url,
    headers: {
      authorization: `Bearer ${apiKey}`,
      'Content-Type': 'text/html'
    },
    body: data
  };

  return options;
}

module.exports = {publishFile}