/**
 * @jsx React.DOM
 */

var React          = require('react');
var ReactPropTypes = React.PropTypes;

var DocumentItem = require('./DocumentItem.react');
var Spinner      = require('./Spinner.react');

var MainSection = React.createClass({

  render: function () {
    var allDocuments = this.props.allDocuments;
    var documents = [];
    var method;
    var document;
    var content;

    if (Object.keys(allDocuments).length) {
      content = <div id="document-list">{documents}</div>

      for (var id in allDocuments) {
        document = allDocuments[id];
        method   = document.pinned ? 'unshift' : 'push';

        documents[method](<DocumentItem document={allDocuments[id]} />);
      }
    } else {
      content = <Spinner />;
    }

    return (
      <div id="MainSection">
        <h1>This is the MainSection</h1>
        {content}
      </div>
    );
  }

});

module.exports = MainSection;
