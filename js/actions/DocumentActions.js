var AppDispatcher     = require('../dispatcher/AppDispatcher');
var DocumentConstants = require('../constants/DocumentConstants');

var DocumentActions = {

  /**
   * @param  {object} document
   */
  togglePin: function (document) {
    var id     = document.id;
    var status = document.pinned
      ? 'DOCUMENT_UNPIN'
      : 'DOCUMENT_PIN';

    AppDispatcher.handleViewAction({
      actionType: DocumentConstants[status],
      id: id
    });
  },

  /**
   * @param  {string} id
   */
  destroy: function (id) {
    AppDispatcher.handleViewAction({
      actionType: DocumentConstants.DOCUMENT_DESTROY,
      id: id
    });
  },

};

module.exports = DocumentActions;
