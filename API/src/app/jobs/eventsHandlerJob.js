const constant = require('../config/constants');
const func = require('../functions/eventsHandlerFunctions');

class EventsHandler {
  //Job identifier
  get key() {
    return 'EventsHandler';
  }

  /* It redirects the standby event, recording the rest and the
     possible error */
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
