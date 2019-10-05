module.exports = {
  getStatusCall(call) {
    const { type } = call;
    return { message: `Received event: ${type}` };
  }
};
