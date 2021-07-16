module.exports = {
    publicRuntimeConfig: {
      // Will be available on both server and client
      backendUrl: process.env.SEND_MAIL_ADRESS,
      API_KEY: process.env.API_KEY
    },
  }