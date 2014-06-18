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

    if (!Object.keys(allDocuments).length) return <Spinner />;

    for (var id in allDocuments) {
      document = allDocuments[id];

      method = document.pinned ? 'unshift' : 'push';
      console.log(method);

      documents[method](<DocumentItem document={allDocuments[id]} />);
    }

    return (

      <div id="MainSection">
        <h1>This is the MainSection</h1>
        <div id="document-list">{documents}</div>
      </div>
    );
  }

});

module.exports = MainSection;
