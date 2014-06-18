/**
 * @jsx React.DOM
 */

var React = require('react');

var Spinner = React.createClass({

  render: function () {
    return (
      <div className="spinner">
        <i></i>
        <i></i>
        <i></i>
      </div>
    );
  }

});

module.exports = Spinner;
