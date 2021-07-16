const config = require('../config.json');
const fetch = require('cross-fetch');

async function publishFile(data) {
  const {organizationId, pageName, apiKey} = config;

  const base = config.isHipaaOrg ? 'https://searchhipaa.cloud.coveo.com' : 'https://search.cloud.coveo.com';
  const url = `${base}/pages/${organizationId}/${pageName}`;
  
  const options = {
    method: 'POST',
    headers: {
      authorization: `Bearer ${apiKey}`,
      'Content-Type': 'text/html'
    },
    body: data
  };

  const res = await fetch(url, options)
  if(Math.floor(res.status / 100) == 2) {
    console.log('Synchronized successfully', res.status);
  } else {
    console.log(`${res.status} Failed to synchronize IPX contents`);
    console.log(await res.json());
  }
}

module.exports = {publishFile}