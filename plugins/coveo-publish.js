const fs = require('fs');
const pluginName = 'CoveoPublishPlugin';
const request = require('request');
const config = require('../config.json');

class CoveoPublishPlugin {
  constructor(options) {
    this.options = options;
  }

  apply(compiler) {
    compiler.hooks.done.tap(pluginName, () => {
      fs.readFile(this.options.filename, 'utf8', (err, data) => {
        if (err) {
          throw new Error(err);
        }
        
        this.publishFile(data);
      });
    });
  }

  publishFile(fileContents) {
    const options = this.buildRequestOptions(fileContents);

    request(options, function(error, response) {
      if (error) throw new Error(error);
      console.log('*********************');
      console.log('Synchronized successfully', response.statusCode);
      console.log('*********************');
    });
  }

  buildRequestOptions(data) {
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
}

module.exports = {CoveoPublishPlugin}
