/**
 * @jsx React.DOM
 */

var React          = require('react');
var ReactPropTypes = React.PropTypes;

var DocumentItem = require('./DocumentItem.react');
var Spinner      = require('./Spinner.react');

var DocumentList = React.createClass({

  render: function () {
    var allDocuments = this.props.allDocuments;
    var documents    = [];
    var document;
    var method;
    var content;

    if (Object.keys(allDocuments).length) {
      for (var id in allDocuments) {
        document = allDocuments[id];
        method   = document.pinned ? 'unshift' : 'push';

        documents[method](<DocumentItem document={document} />);
      }

      content = <div id="document-list">{documents}</div>
    } else {
      content = <Spinner />;
    }

    return (
      <div id="document-list">
        <h1>This is the DocumentList</h1>
        {content}
      </div>
    );
  }

});

module.exports = DocumentList;
