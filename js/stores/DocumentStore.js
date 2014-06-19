var AppDispatcher     = require('../dispatcher/AppDispatcher');
var DocumentConstants = require('../constants/DocumentConstants');
var EventEmitter      = require('events').EventEmitter;
var merge             = require('react/lib/merge');
var request           = require('superagent');
var parseString       = require('xml2js').parseString;

var CHANGE_EVENT = 'change';
var BASE_URL     = 'http://curate.trap.it/api/v4/tc/traps/2c76c05e75814865b4a8c67052b5d0f3/atom/';

var _documents = {};

function updateStore() {
  request
    .get(BASE_URL)
    .end(function (res) {
      parseString(res.text, function (err, data) {
        data.feed.entry.forEach(function (document) {
          document.pinned = false;
          if (!_documents[document.id]) _documents[document.id] = document;
        });
      });

      DocumentStore.emitChange();
    });
}

function togglePin (id) {
  var document = _documents[id];

  document.pinned = !document.pinned;
}

function destroy(id) {
  delete _documents[id];
}

var DocumentStore = merge(EventEmitter.prototype, {

  getAll: function () {
    return _documents;
  },

  emitChange: function () {
    this.emit(CHANGE_EVENT);
  },

  addChangeListener: function (callback) {
    this.on(CHANGE_EVENT, callback);
  },

  removeChangeListener: function (callback) {
    this.removeListener(CHANGE_EVENT, callback);
  }

});

AppDispatcher.register(function (payload) {
  var action = payload.action;

  switch(action.actionType) {

    case DocumentConstants.DOCUMENT_TOGGLE_PIN:
      togglePin(action.id);
      break;

    case DocumentConstants.DOCUMENT_DESTROY:
      destroy(action.id);
      break;

  }

  DocumentStore.emitChange();

  return true;
});

updateStore();

module.exports = DocumentStore;
