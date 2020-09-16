const config = require('../config.json');
const fetch = require('cross-fetch');

async function listWidgets() {
  const {organizationId, apiKey} = config;
  const base = 'https://platform.cloud.coveo.com'
  const url =  `${base}/rest/organizations/${organizationId}/pages/inappwidgets`

  const options = {
    method: 'GET',
    headers: {
      authorization: `Bearer ${apiKey}`
    }
  }

  const res = await fetch(url, options);
  return res.json();
}

module.exports = {listWidgets}

