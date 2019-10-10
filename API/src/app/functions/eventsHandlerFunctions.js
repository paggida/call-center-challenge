const constant = require('../config/constants');
const db = require('../functions/databaseFunctions');
const apiWrapper = require('../services/apiWrapper');

module.exports = {
  rankingEventsType(eventObject) {
    const { type } = eventObject;
    switch (type) {
      case 'call.new':
        return _addRankingAttribute(eventObject, 1);
      case 'call.standby':
        return _addRankingAttribute(eventObject, 2);
      case 'call.waiting':
        return _addRankingAttribute(eventObject, 3);
      case 'actor.entered':
        return _addRankingAttribute(eventObject, 4);
      case 'call.ongoing':
        return _addRankingAttribute(eventObject, 5);
      case 'actor.left':
        return _addRankingAttribute(eventObject, 6);
      case 'call.finished':
        return _addRankingAttribute(eventObject, 7);
      default:
        return _addRankingAttribute(eventObject, 0);
    }
  },
  async getCorrectBranch(id) {
    const { isFirstContact } = await db.findById(id, constant.TABLE_CUSTOMERS);
    return isFirstContact
      ? constant.FIRST_CONTACT_BRANCH
      : constant.COMMON_CONTACT_BRANCH;
  },
  async redirectCall(idCall, id, type, typeRating) {
    const destination = await this.getCorrectBranch(id);

    await db.update(
      { id, type, typeRating, isFirstContact: false },
      constant.TABLE_CUSTOMERS
    );

    return apiWrapper.post('/actions', {
      type: 'delegate',
      call_id: idCall,
      destination
    });
  },
  async registerCallEvent(id, type, typeRating) {
    return !(await db.findById(id, constant.TABLE_CUSTOMERS))
      ? await db.insert(
          { id, type, typeRating, isFirstContact: true },
          constant.TABLE_CUSTOMERS
        )
      : await db.update(
          { id, type, typeRating, isFirstContact: false },
          constant.TABLE_CUSTOMERS
        );
  },
  async handleResponseExceptions(id, type, { status, message }) {
    if (status)
      await db.insert(
        { id, type, message, date: new Date() },
        constant.TABLE_ERROR_LOG
      );
  }
};

_addRankingAttribute = (object, typeRating) => ({ ...object, typeRating });
