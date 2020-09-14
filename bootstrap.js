import config from './config.json';

const {organizationId, pageId} = config;
const url = `https://platform.cloud.coveo.com/rest/organizations/${organizationId}/pages/${pageId}/inappwidget/loader`;

const script = document.createElement('script')
script.src = url;
script.type = 'text/javascript'

document.body.append(script)