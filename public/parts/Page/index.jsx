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
    var context = this.refs.canvas.getContext('2d')
    var templates = require('../../templates')
    templates.cover(context, {
      cover: '/images/logo.png',
      title: "造字工房尚雅",
      desc: "方正兰亭纤黑",
      presents: "renyan presents"
    })
    // var image = new Image()
    // image.src = '/images/logo.png'
    // image.onload = function() {
    //   context.drawImage(image, 0, 0)
    // }
    //
    // context.font = "40px PingFangSC-Ultralight, sans-serif"
    // context.fillText("hello world", 10, 350)
    // context.font = "20px PingFangSC-Ultralight, sans-serif"
    // context.fillText("这是一行字哦，一行字哦", 10, 450)
    // image.src = this.props.content.image
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
