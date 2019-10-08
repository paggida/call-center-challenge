const func = require('../functions/eventsHandlerFunctions');
//----------Status constants------------
const STANDBY_CALL_STATUS = 2;

class EventsHandler {
  get key() {
    return 'EventsHandler';
  }

  async handle(job, done) {
    const { their_number: id, type, typeRating, call_id: idCall } = job.data;
    const response =
      typeRating === STANDBY_CALL_STATUS
        ? func.redirectCall(idCall)
        : func.registerCallEvent(id, type, typeRating);
    func.handleResponseExceptions(id, type, response);
    return done();
  }
}
module.exports = new EventsHandler();
