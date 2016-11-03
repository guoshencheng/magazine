
require('./style.scss')

import React from 'react'
import ReactDOM from 'react-dom'
import autoBind from 'react-autobind'

class Preface extends React.Component {
  constructor(props){
     super(props);
     autoBind(this);
  }

  onUpdateClick() {
    var value = this.refs.textarea.value
    if (this.props.updateValue) {
      this.props.updateValue(value)
    }
  }

  render() {
    return (
      <div className="preface_container">
        <textarea ref="textarea" name="Text1" className="preface_text"></textarea>
        <div className="ry_control_btn" onClick={this.onUpdateClick}>更新序言</div>
      </div>
    )
  }
}

module.exports = Preface
