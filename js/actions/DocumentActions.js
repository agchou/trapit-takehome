var AppDispatcher     = require('../dispatcher/AppDispatcher');
var DocumentConstants = require('../constants/DocumentConstants');

var DocumentActions = {

  /**
   * @param  {object} document
   */
  togglePin: function (id) {
    AppDispatcher.handleViewAction({
      actionType: DocumentConstants.DOCUMENT_TOGGLE_PIN,
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
