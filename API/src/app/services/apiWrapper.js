const api = require('../services/api');
const error = require('../Exceptions/apiExceptions');

module.exports = {
  post(url, body = {}) {
    return new Promise((resolve, reject) => {
      // If there is an url defined it'll call de API...
      if (process.env.URL_TERAVOZ) {
        api
          .post(`${process.env.URL_TERAVOZ}/${url}`, body)
          .then(() => resolve({ status: 0 }))
          .catch(errorObject => reject(error.throwException(errorObject)));
      } else {
        //... Otherwise, it'll simulates api response
        resolve({ status: 0 });
      }
    });
  }
};
