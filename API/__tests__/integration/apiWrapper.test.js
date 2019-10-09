const api = require('../../src/app/services/apiWrapper');

describe('Validation apiExceptions.js', () => {
  it('should be able to make an api call', async () => {
    const response = await api.post('/actions');
    expect(response.status).toBe(200);
  });
});
