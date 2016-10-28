
require('./style.scss')

import React from 'react'
import ReactDOM from 'react-dom'
import autoBind from 'react-autobind'

class Navbar extends React.Component {
  constructor(props){
     super(props);
     autoBind(this);
  }
  render() {
    return (
      <div id="navbar_container">
      </div>
    )
  }
}

module.exports = Navbar
