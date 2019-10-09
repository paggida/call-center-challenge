const constant = require('../../src/app/config/constants');
const db = require('../../src/app/functions/databaseFunctions');
const eventsHandlerFunc = require('../../src/app/functions/eventsHandlerFunctions');

describe('handleResponseExceptions function validation', () => {
  afterAll(async () => {
    await db.delete(99999999, constant.TABLE_ERROR_LOG);
  });
  it('Should be able to insert an error in table TB_ERROR_LOG', async () => {
    await eventsHandlerFunc.handleResponseExceptions(99999999, 'call.waiting', {
      status: 2,
      message: 'Invalid record.'
    });
    const responseError = await db.findById(99999999, constant.TABLE_ERROR_LOG);
    expect(responseError.id).toBe(99999999);
    expect(responseError.type).toBe('call.waiting');
    expect(responseError.message).toBe('Invalid record.');
  });
  it('Should not be able to insert a successful transaction in table TB_ERROR_LOG', async () => {
    const response = await eventsHandlerFunc.handleResponseExceptions(
      99999999,
      'call.waiting',
      { status: 0 }
    );
    expect(response).toBeFalsy();
  });
});
describe('registerCallEvent function validation', () => {
  afterAll(async () => {
    await db.delete(99999999, constant.TABLE_CUSTOMERS);
  });
  it('Should be able to insert a new customer record', async () => {
    const response = await eventsHandlerFunc.registerCallEvent(
      99999999,
      'call.new',
      1
    );
    expect(response.status).toBe(0);
  });
  it('Should be able to update a recurring customer record', async () => {
    const response = await eventsHandlerFunc.registerCallEvent(
      99999999,
      'call.waiting',
      3
    );
    expect(response.status).toBe(0);
  });
});
describe('Validation of first contact customer redirect', () => {
  beforeAll(async () => {
    await db.insert(
      { id: 99999999, type: 'call.new', typeRating: 1, isFirstContact: true },
      constant.TABLE_CUSTOMERS
    );
  });
  afterAll(async () => {
    await db.update(
      {
        id: 99999999,
        type: 'call.standby',
        typeRating: 2,
        isFirstContact: false
      },
      constant.TABLE_CUSTOMERS
    );
  });
  it('Should be able to get the correct branch to redirect a first contact', async () => {
    const response = await eventsHandlerFunc.getCorrectBranch(99999999);
    expect(response).toBe(constant.FIRST_CONTACT_BRANCH);
  });
});
describe('Validation of recurrent contact customer', () => {
  afterAll(async () => {
    await db.delete(99999999, constant.TABLE_CUSTOMERS);
  });
  it('Should be able to get the correct branch to redirect a recurrent contact', async () => {
    const response = await eventsHandlerFunc.getCorrectBranch(99999999);
    expect(response).toBe(constant.COMMON_CONTACT_BRANCH);
  });
});
describe('Redirect process validation', () => {
  beforeAll(async () => {
    await db.insert(
      { id: 99999999, type: 'call.new', typeRating: 1, isFirstContact: true },
      constant.TABLE_CUSTOMERS
    );
  });
  afterAll(async () => {
    await db.delete(99999999, constant.TABLE_CUSTOMERS);
  });

  it('Should be able redirect a call', async () => {
    const response = await eventsHandlerFunc.redirectCall(
      '001',
      99999999,
      'call.standby',
      2
    );
    expect(response.status).toBe(0);
  });
});
