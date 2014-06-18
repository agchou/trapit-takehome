/**
 * @jsx React.DOM
 */

var React = require('react');

var DocumentActions = require('../actions/DocumentActions');

var DocumentView = React.createClass({

  render: function () {
    var document = this.props.document;

    return (
      <div className="document">
        <img src={document['media:thumbnail']['0']['$']['url']}></img>
        <p>{document.title}</p>

        <button className="destroy" onClick={this._onDestroyClick}>
          Destroy
        </button>

        <button className="toggle-pin" onClick={this._onTogglePinClick}>
          {document.pinned ? "Unpin" : "Pin"}
        </button>

      </div>
    );
  },

  _onDestroyClick: function () {
    DocumentActions.destroy(this.props.document.id);
  },

  _onTogglePinClick: function () {
    DocumentActions.togglePin(this.props.document)
  }

});


module.exports = DocumentView;
