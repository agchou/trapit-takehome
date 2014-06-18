/**
 * @jsx React.DOM
 */

var React          = require('react');
var ReactPropTypes = React.PropTypes;

var DocumentItem = require('./DocumentItem.react');
var Spinner      = require('./Spinner.react');

var MainSection = React.createClass({

  render: function () {
    if (!Object.keys(this.props.allDocuments).length) return <Spinner />;

    var allDocuments = this.props.allDocuments;
    var documents = [];

    for (var id in allDocuments) {
      documents.push(<DocumentItem document={allDocuments[id]} />);
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
