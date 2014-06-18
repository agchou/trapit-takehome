/**
 * @jsx React.DOM
 */

var React = require('react/addons');
var cx    = React.addons.classSet;

var DocumentActions = require('../actions/DocumentActions');

var DocumentView = React.createClass({

  render: function () {

    var document       = this.props.document;
    var thumbnailUrl   = document['media:thumbnail']['0']['$']['url'];
    var pinButtonText  = document.pinned ? "Unpin" : "Pin";
    var pinButtonClass = cx({
      'toggle-pin': true,
      'pinned': document.pinned
    });

    return (
      <div className="document">
        <img src={thumbnailUrl}></img>
        <p>{document.title}</p>

        <button className="destroy" onClick={this._onDestroyClick}>
          Destroy
        </button>

        <button className={pinButtonClass} onClick={this._onTogglePinClick}>
          {pinButtonText}
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
