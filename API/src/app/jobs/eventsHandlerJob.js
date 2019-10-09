const func = require('../functions/eventsHandlerFunctions');
const constant = require('../config/constants');

class EventsHandler {
  get key() {
    return 'EventsHandler';
  }

  async handle(job, done) {
    const { their_number: id, type, typeRating, call_id: idCall } = job.data;
    const response =
      typeRating === constant.STANDBY_CALL_STATUS
        ? func.redirectCall(idCall, id, type, typeRating)
        : func.registerCallEvent(id, type, typeRating);
    func.handleResponseExceptions(id, type, response);
    return done();
  }
}
module.exports = new EventsHandler();
