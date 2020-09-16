const config = require('../config.json');
const fetch = require('cross-fetch');

async function publishFile(fileContents) {
  const {organizationId, pageName, apiKey} = config;
  const url = `https://search.cloud.coveo.com/pages/${organizationId}/${pageName}`;
  
  const options = {
    method: 'POST',
    headers: {
      authorization: `Bearer ${apiKey}`,
      'Content-Type': 'text/html'
    },
    body: data
  };

  const res = await fetch(url, options)
  console.log('Synchronized successfully', res.statusCode);
}

module.exports = {publishFile}