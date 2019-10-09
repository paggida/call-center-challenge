const api = require('../services/api');

module.exports = {
  post(url, body = {}) {
    return new Promise((resolve, reject) => {
      // If there is an url defined it'll call de API...
      if (process.env.URL_TERAVOZ) {
        api
          .post(`${process.env.URL_TERAVOZ}/${url}`, body)
          .then(response => resolve(response))
          .catch(error => reject(error));
      } else {
        //... Otherwise, it'll simulates api response
        resolve({
          status: 200,
          statusText: 'OK',
          headers: {},
          config: {},
          request: {},
          data: {}
        });
      }
    });
  }
};
