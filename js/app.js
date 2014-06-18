/**
 * @jsx React.DOM
 */

var React = require('react');

var DocumentApp = require('./components/DocumentApp.react');

React.renderComponent(
  <DocumentApp />,
  document.getElementById('documentapp')
);
