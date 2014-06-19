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
    var cardClass = cx({
      'card': true,
      'card--pinned': document.pinned
    });

    return (
      <div className={cardClass}>

        <div className="card-thumbnail">
          <img src={thumbnailUrl}></img>
        </div>

        <div className="card-content">
          <p>{document.title}</p>

          <button className="destroy" onClick={this._onDestroyClick}>
            Destroy
          </button>

          <button className="toggle-pin" onClick={this._onTogglePinClick}>
            {pinButtonText}
          </button>
        </div>

      </div>
    );

  },

  _onDestroyClick: function () {
    DocumentActions.destroy(this.props.document.id);
  },

  _onTogglePinClick: function () {
    DocumentActions.togglePin(this.props.document.id)
  }

});

module.exports = DocumentView;
