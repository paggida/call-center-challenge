const request = require('supertest');
const app = require('../../src/server');

//Mock the queue comportment
jest.mock('../../src/app/services/callsQueue', () => ({
  create: jest.fn(() => ({
    attempts: jest.fn(() => ({
      save: jest.fn()
    }))
  }))
}));

describe('Validation to endpoint "/webhook"', () => {
  it('Should be able to send a new event', async () => {
    const response = await request(app)
      .post('/webhook')
      .send({
        type: 'call.new',
        call_id: '0000000000.00001',
        code: '123456',
        direction: 'inbound',
        our_number: '11111111',
        their_number: '99999999',
        their_number_type: 'mobile',
        timestamp: '2019-09-05T03:00:00Z'
      });

    expect(response.status).toBe(200);
    expect(response.body.message).toBe('Event received!');
  });
});
