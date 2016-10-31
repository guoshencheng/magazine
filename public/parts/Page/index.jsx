import React from 'react'
import ReactDOM from 'react-dom'
import autoBind from 'react-autobind'

require('./style.scss')

class Page extends React.Component {
  constructor(props){
     super(props);
     autoBind(this);
  }

  componentDidMount() {
    this.updateCanvas()
  }

  updateCanvas() {
    var canvas = this.refs.canvas
    var context = canvas.getContext('2d')
    context.fillStyle = 'white'
    context.fillRect(0, 0, canvas.width, canvas.height)
    var templates = require('../../templates')
    templates.cover(context, {
      cover: '/images/logo.png',
      title: "造字工房尚雅",
      desc: "方正兰亭纤黑",
      presents: "renyan presents"
    })
  }

  render() {
    return (
      <div className="ry_page_item">
        <canvas ref="canvas" width={839} height={1190} />
      </div>
    )
  }
}

module.exports = Page
