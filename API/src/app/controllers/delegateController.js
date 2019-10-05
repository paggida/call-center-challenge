module.exports = {
  delegateCall(req, res) {
    const { type } = req.body;
    return res.json({
      message: `Evento recebido: ${type}`
    });
  }
};
