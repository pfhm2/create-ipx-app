const {writeFileSync, existsSync} = require('fs');
const {resolve} = require('path');

const filePath = resolve(__dirname, '../config.json');

if (existsSync(filePath)) {
  return;
}

const config = {
  organizationId: '',
  pageId: '',
  pageName: '',
  apiKey: ''
}


writeFileSync(filePath, JSON.stringify(config, undefined, 2))