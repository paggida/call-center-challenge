const func = require('../functions/delegateFunctions');

module.exports = {
  delegateCall(req, res) {
    return res.json(func.getStatusCall(req.body));
  }
};
