const fs = require('fs');
const path = require('path');
const pluginName = 'CoveoPublishPlugin';
const {getWidget} = require('../api/get-widget');

class CoveoPublishPlugin {
  constructor(options) {
    this.options = options;
  }

  apply(compiler) {
    compiler.hooks.done.tapPromise(pluginName, async () => {
      const res = await getWidget();
      const {head} = res;
      
      const distPath = path.resolve(__dirname, '../dist')
      const body = fs.readFileSync(path.resolve(distPath, 'ipx.html'), 'utf-8');
      
      let index = fs.readFileSync(path.resolve(__dirname, '../index.html'), 'utf-8');
      index = index.replace('{{ipx-head}}', head)
      index = index.replace('{{ipx-body}}', body);
      
      fs.writeFileSync(path.resolve(distPath, 'index.html'), index)
    });
  }
}

module.exports = CoveoPublishPlugin;
