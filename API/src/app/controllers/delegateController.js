const eventsHandlerFunc = require('../functions/eventsHandlerFunctions');
const eventsHandlerJob = require('../jobs/eventsHandlerJob');
const callsQueue = require('../services/callsQueue');

module.exports = {
  async eventsReceiver(req, res) {
    callsQueue
      .create(
        eventsHandlerJob.key,
        eventsHandlerFunc.rankingEventsType(req.body)
      )
      .attempts(process.env.NUMBER_ATTEMPTS_JOBS || 3)
      .save();
    return res.json({ message: `Event received!` });
  }
};
