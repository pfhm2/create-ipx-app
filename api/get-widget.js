const config = require('../config.json');
const fetch = require('cross-fetch');

async function getWidget() {
  const {organizationId, pageId, apiKey} = config;
  const base = 'https://search.cloud.coveo.com'
  const url = `${base}/pages/${organizationId}/inappwidget/${pageId}?json=1`;

  const options = {
    method: 'GET',
    headers: {
      authorization: `Bearer ${apiKey}`
    }
  }
  const res = await fetch(url, options);
  return res.json();
}

module.exports = {getWidget}
