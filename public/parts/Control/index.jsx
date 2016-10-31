import React from 'react'
import ReactDOM from 'react-dom'
import autoBind from 'react-autobind'

require('./style.scss')

class Control extends React.Component {
  constructor(props){
     super(props);
     autoBind(this);
     console.log(env)
  }

  render() {
    return (
      <div id="ry_control">
        <input className="ry_control_input" placeholder="请输入言集id" type="text"></input>
        <div className="ry_control_btn" onClick={this.props.make}>制作</div>
      </div>
    )
  }
}

module.exports = Control
