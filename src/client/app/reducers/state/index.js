import _ from 'underscore';

const isHTTPS = _.isEqual(location.protocol, 'https:');
const noCache = `nocache=${_.now()}`;

const domains = _.map([
  {
    domain: 'admin.workspace.ibm.com',
    internal: true
  }, {
    domain: 'api.watsonwork.ibm.com',
    internal: true
  }, {
    domain: 'developer.watsonwork.ibm.com',
    internal: true
  }, {
    domain: 'downloads.workspace.ibm.com',
    internal: true
  }, {
    domain: 'help.workspace.ibm.com',
    internal: true,
    transport: 'IMG',
    url: 'https://help.workspace.ibm.com/favicon.ico'
  }, {
    domain: 'login.workspace.ibm.com',
    internal: true
  }, {
    domain: 'register.workspace.ibm.com',
    internal: true
  }, {
    domain: 'watsonwork.ibm.com',
    internal: true
  }, {
    domain: 'watsonwork.me',
    internal: true
  }, {
    domain: 'watsonworkspace.ibm.com',
    internal: true
  }, {
    domain: 'workspace.ibm.com',
    internal: true
  }, {
    domain: 'bam.nr-data.net',
    external: true,
    info: {
      description: 'New Relic’s digital intelligence platform lets developers, ops, and tech teams measure and monitor the performance of their applications and infrastructure.',
      icon: 'https://newrelic.com/assets/newrelic/source/NewRelic-logo-square.svg',
      owner: 'NewRelic',
      url: 'https://newrelic.com'
    },
    method: 'POST',
    transport: 'XHR',
    url: `https://bam.nr-data.net/events/1/9d9c2d354f?a=16466058&ref=https://workspace.ibm.com&${noCache}`
  }, {
    domain: 'cloudfront.net',
    external: true,
    method: 'GET',
    info: {
      description: 'Whether you’re looking for compute power, database storage, content delivery or other functionality, AWS has the services to help you build sophisticated applications with increased flexibility, scalability and reliability.',
      icon: 'https://a0.awsstatic.com/main/images/site/fav/favicon.ico',
      owner: 'Amazon Web Services, Inc.',
      url: 'https://aws.amazon.com'
    },
    transport: 'IMG',
    url: `https://d24cgw3uvb9a9h.cloudfront.net/zoom.ico`
  }, {
    domain: 'idaas.iam.ibm.com',
    external: true,
    info: {
      description: 'IBM id Sign-in Template refresh',
      icon: 'https://idaas.iam.ibm.com/favicon.ico',
      owner: 'IBM (SSO)',
      url: 'https://idaas.iam.ibm.com'
    },
    transport: 'IMG',
    url: `https://idaas.iam.ibm.com/favicon.ico`
  }, {
    domain: 'js-agent.newrelic.com',
    external: true,
    info: {
      description: 'New Relic’s digital intelligence platform lets developers, ops, and tech teams measure and monitor the performance of their applications and infrastructure.',
      icon: 'https://newrelic.com/assets/newrelic/source/NewRelic-logo-square.svg',
      owner: 'New Relic',
      url: 'https://newrelic.com'
    },
    transport: 'SCRIPT',
    url: `https://js-agent.newrelic.com/nr-974.min.js?${noCache}`
  }, {
    domain: 'nps.mybluemix.net',
    external: true,
    method: 'GET',
    info: {
      description: 'Bluemix is an open standards, cloud platform for building, running, and managing apps and services.',
      icon: 'https://console.bluemix.net/docs/favicon.ico',
      owner: 'IBM (Bluemix NPS)',
      url: 'https://www.mybluemix.net'
    },
    transport: 'XHR',
    url: `https://nps.mybluemix.net/survey/?${noCache}`
  }, {
    domain: 'zoom.us',
    external: true,
    method: 'GET',
    info: {
      description: 'Zoom is the leader in modern enterprise video communications, with an easy, reliable cloud platform for video and audio conferencing, chat, and webinars across mobile, desktop, and room systems',
      icon: 'https://d24cgw3uvb9a9h.cloudfront.net/zoom.ico',
      owner: 'Zoom Video Communications, Inc.',
      url: 'https://zoom.us'
    },
    transport: 'IMG',
    url: `https://zoom.us/zoom.ico`
  }
], data => {
  const {internal, domain} = data;
  return internal ?
    {
      method: 'GET',
      info: {
        description: 'Watson Workspace collaboration tool - persistent group and direct messaging, file sharing and search, plus the cognitive power of Watson.',
        icon: 'https://workspace.ibm.com/favicon.ico',
        owner: 'IBM (Watson Workspace)',
        url: 'https://workspace.ibm.com'
      },
      transport: 'XHR',
      url: `https://${domain}/status`,
      ...data
    } : data;
});

exports.domains =  [ ...domains ];

const methods = _.map([
  {
    method: 'DELETE'
  }, {
    method: 'GET'
  }, {
    method: 'POST'
  }, {
    method: 'PUT'
  }, {
    method: 'OPTIONS'
  }
], data => ({
  ...data,
  transport: 'XHR',
  url: `${location.origin}/method`
}));

exports.methods = methods;

exports.protocols = [
  {
    protocol: 'HTTPS',
    url: `${location.href}protocol`,
    method: 'POST',
    transport: 'XHR'
  }, {
    protocol: 'WSS',
    url: `${isHTTPS ? 'wss' : 'ws'}://${location.host}/echo`,
    transport: 'WEBSOCKET'
  }
];

const headers = _.map([
  {
    header: 'Accept',
    value: '*/*'
  }, {
    header: 'Accept-Language',
    value: 'en'
  }, {
    header: 'Authorization',
    value: 'Basic SGVsbG8gV29ybGQ='
  }, {
    header: 'clientMutationId',
    value: '4b6cc8ac-bb42-11e7-abc4-cec278b6b50a'
  }, {
    header: 'Content-Type',
    value: 'application/json'
  }, {
    header: 'Cookie'
  }, {
    header: 'jwt',
    value: 'SGVsbG8gV29ybGQ='
  }, {
    header: 'requestId',
    value: '4b6cc8ac-bb42-11e7-abc4-cec278b6b50a'
  }, {
    header: 'x-graphql-view',
    value: 'PUBLIC'
  }, {
    header: 'X-RequestId',
    value: '4b6cc8ac-bb42-11e7-abc4-cec278b6b50a'
  }
], data => ({
  ...data,
  method: 'POST',
  headers: {
    [data.header]: data.value
  },
  transport: 'XHR',
  url: `${location.origin}/headers/${data.header}`
}));

exports.headers = headers;
