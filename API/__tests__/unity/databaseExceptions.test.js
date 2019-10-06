const error = require('../../src/app/Exceptions/databaseExceptions');

describe('Validation databaseExceptions.js', () => {
  it('should be able to send a known error code', () => {
    const response = error.throwException(1);
    expect(response.status).toBe(1);
    expect(response.message).toBe('Table not found.');
  });
  it('should not throw an exception if it receives an unknown error code.', () => {
    const response = error.throwException('X');
    expect(response.status).toBe('X');
    expect(response.message).toBe('Unknown error code');
  });
});
