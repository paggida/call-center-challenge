module.exports = {
  post(url) {
    return new Promise((resolve, reject) => {
      resolve({
        status: 200,
        statusText: 'OK',
        headers: {},
        config: {},
        request: {},
        data: {}
      });
    });
  }
};
