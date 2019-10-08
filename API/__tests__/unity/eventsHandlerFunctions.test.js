const eventsHandlerFunc = require('../../src/app/functions/eventsHandlerFunctions');

describe('Event ranking function validation', () => {
  it('Should be able to get code corresponds to life cycle step named call.new', () => {
    const newObject = {
      type: 'call.new',
      call_id: '1463669263.30033',
      code: '123456',
      direction: 'inbound',
      our_number: '0800000000',
      their_number: '11999990000',
      their_number_type: 'mobile',
      timestamp: '2017-01-01T00:00:00Z'
    };
    const response = eventsHandlerFunc.rankingEventsType(newObject);
    expect(response).toHaveProperty('typeRating', 1);
  });
  it('Should be able to get code corresponds to life cycle step named call.standby', () => {
    const standbyObject = {
      type: 'call.standby',
      call_id: '1463669263.30033',
      code: '123456',
      direction: 'inbound',
      our_number: '0800000000',
      their_number: '11991910000',
      timestamp: '2017-01-01T00:00:00Z'
    };
    const response = eventsHandlerFunc.rankingEventsType(standbyObject);
    expect(response).toHaveProperty('typeRating', 2);
  });
  it('Should be able to get code corresponds to life cycle step named call.waiting', () => {
    const waitingObject = {
      type: 'call.waiting',
      call_id: '1463669263.30033',
      code: '123456',
      direction: 'inbound',
      our_number: '0800000000',
      their_number: '11991910000',
      queue: '900',
      timestamp: '2017-01-01T00:00:00Z'
    };
    const response = eventsHandlerFunc.rankingEventsType(waitingObject);
    expect(response).toHaveProperty('typeRating', 3);
  });
  it('Should be able to get code corresponds to life cycle step named actor.entered', () => {
    const enteredObject = {
      type: 'actor.entered',
      call_id: '1463669263.30033',
      code: '123456',
      actor: 'user.name@email.com',
      number: '200',
      queue: '900',
      timestamp: '2017-01-01T00:00:00Z'
    };
    const response = eventsHandlerFunc.rankingEventsType(enteredObject);
    expect(response).toHaveProperty('typeRating', 4);
  });
  it('Should be able to get code corresponds to life cycle step named call.ongoing', () => {
    const ongoingObject = {
      type: 'call.ongoing',
      call_id: '1463669263.30033',
      code: '123456',
      direction: 'inbound',
      our_number: '0800000000',
      their_number: '11991910000',
      timestamp: '2017-01-01T00:00:00Z'
    };
    const response = eventsHandlerFunc.rankingEventsType(ongoingObject);
    expect(response).toHaveProperty('typeRating', 5);
  });
  it('Should be able to get code corresponds to life cycle step named actor.left', () => {
    const leftObject = {
      type: 'actor.left',
      call_id: '1463669263.30033',
      code: '123456',
      actor: 'user.name@email.com',
      number: '200',
      queue: '900',
      timestamp: '2017-01-01T00:00:00Z'
    };
    const response = eventsHandlerFunc.rankingEventsType(leftObject);
    expect(response).toHaveProperty('typeRating', 6);
  });
  it('Should be able to get code corresponds to life cycle step named call.finished', () => {
    const finishedObject = {
      type: 'call.finished',
      call_id: '1463669263.30033',
      code: '123456',
      direction: 'inbound',
      our_number: '0800000000',
      their_number: '11991910000',
      timestamp: '2017-01-01T00:00:00Z'
    };
    const response = eventsHandlerFunc.rankingEventsType(finishedObject);
    expect(response).toHaveProperty('typeRating', 7);
  });
  it('Should be able to get the default code corresponds to life cycle step with an unknown step name', () => {
    const overflowObject = {
      type: 'call.overflow',
      call_id: '1463669263.30033',
      code: '123456',
      direction: 'inbound',
      destination: '910',
      our_number: '0800000000',
      their_number: '11991910000',
      timestamp: '2017-01-01T00:00:00Z'
    };
    const response = eventsHandlerFunc.rankingEventsType(overflowObject);
    expect(response).toHaveProperty('typeRating', 0);
  });
});
