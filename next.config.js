const env = process.env.ENV || 'development';

const configs = {
  development: {
    api: 'http://localhost:3000',
  },
  staging: {
    api: 'https://ousia-back-staging.herokuapp.com',
  },
  production: {
    api: 'https://ousia-back.herokuapp.com',
  },
}[env];

module.exports = () => {

  return {
    env: {
      url: configs.api,
    },
  }
}
