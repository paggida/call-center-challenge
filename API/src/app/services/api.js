const axios = require('axios');

// Create object for calling API
const api = axios.create({ baseURL: process.env.URL_TERAVOZ });

module.exports = api;
