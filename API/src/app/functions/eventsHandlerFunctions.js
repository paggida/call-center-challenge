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
  }
};

_addRankingAttribute = (object, typeRating) => ({ ...object, typeRating });
