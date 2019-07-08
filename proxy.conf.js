const domain = 'http://xxxx.xx.com';// backend

const PROXY_CONFIG = [
  {
    context: [
      "/graphql",
    ],
    target: `${domain}`,
    secure: false
  }
];

module.exports = PROXY_CONFIG;
