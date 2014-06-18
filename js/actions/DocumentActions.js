var AppDispatcher     = require('../dispatcher/AppDispatcher');
var DocumentConstants = require('../constants/DocumentConstants');

var DocumentActions = {

  /**
   * @param  {object} document
   */
  togglePin: function (document) {
    var id = document.id;

    if (!document.pinned) {
      AppDispatcher.handleViewAction({
        actionType: DocumentConstants.DOCUMENT_PIN,
        id: id
      });
    } else {
      AppDispatcher.handleViewAction({
        actionType: DocumentConstants.DOCUMENT_UNPIN,
        id: id
      });
    }
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
