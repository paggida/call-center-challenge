const error = require('../../src/app/Exceptions/apiExceptions');

describe('Validation apiExceptions.js', () => {
  it('should be able to send a known error message', () => {
    const response = error.throwException({
      name: 'Error',
      message: 'Known Message'
    });
    expect(response.status).toBe(500);
    expect(response.type).toBe('API');
    expect(response.message).toBe('Known Message');
  });
  it('should be able to send a unknown error message', () => {
    const response = error.throwException({});
    expect(response.status).toBe(500);
    expect(response.type).toBe('API');
    expect(response.message).toBe('Unknown error accessing external API.');
  });
});
