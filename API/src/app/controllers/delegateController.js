const constant = require('../config/constants');
const db = require('../functions/databaseFunctions');
const callsQueue = require('../services/callsQueue');
const eventsHandlerJob = require('../jobs/eventsHandlerJob');
const eventsHandlerFunc = require('../functions/eventsHandlerFunctions');

module.exports = {
  // Receives the event and adds it to the queue
  async eventsReceiver(req, res) {
    callsQueue
      .create(
        eventsHandlerJob.key,
        eventsHandlerFunc.rankingEventsType(req.body)
      )
      .attempts(process.env.NUMBER_ATTEMPTS_JOBS || 3)
      .save();
    return res.json({ message: `Event received!` });
  },
  async getlistActiveCalls(req, res) {
    const list = await db.listActiveCalls(constant.TABLE_CUSTOMERS);
    return res.json({ list });
  }
};
