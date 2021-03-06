/**
 * @jsx React.DOM
 */

var React         = require('react');
var DocumentStore = require('../stores/DocumentStore');

var DocumentList   = require('./DocumentList.react');

function getDocumentState() {
  return {
    allDocuments: DocumentStore.getAll() || {}
  };
}

var DocumentApp = React.createClass({

  getInitialState: function () {
    return getDocumentState();
  },

  componentDidMount: function () {
    DocumentStore.addChangeListener(this._onChange);
  },

  componentWillUnmount: function () {
    DocumentStore.removeChangeListener(this._onChange);
  },

  _onChange: function () {
    this.setState(getDocumentState());
  },

  render: function () {
    return (
      <div className="container">
        hello
        <DocumentList
          allDocuments={this.state.allDocuments}
        />
      </div>
    );
  }

});

module.exports = DocumentApp;
