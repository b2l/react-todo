/**
 * @jsx React.DOM
 */
import React from 'react'

var ReactTodo = React.createClass({
  render: function() {
    return (
      <div><h1>Hello world!!</h1></div>
    )
  }
})

React.render(<ReactTodo/>, document.body)
