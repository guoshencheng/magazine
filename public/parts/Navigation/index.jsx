
require('./style.scss')

import React from 'react'
import ReactDOM from 'react-dom'
import autoBind from 'react-autobind'

class Navigation extends React.Component {
  constructor(props){
     super(props);
     autoBind(this);
  }
  render() {
    return (
      <div id="navigation_container">
        <a href='/'>
          <img src="/images/logo.png" className="ry_navigation_logo" />
          <p className="ry_navigation_title">人言杂志</p>
        </a>
      </div>
    )
  }
}

module.exports = Navigation
