import axios from 'axios';

const api = axios.create({
  baseURL: process.env.URL_TERAVOZ
});

export default api;
