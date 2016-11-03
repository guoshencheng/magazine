import React from 'react'
import ReactDOM from 'react-dom'
import autoBind from 'react-autobind'
import utils from '../../lib/utils'
import templates from '../../templates'
import models from '../../templates/models'

require('./style.scss')

class Page extends React.Component {
  constructor(props){
     super(props);
     autoBind(this);
  }

  componentDidMount() {
    this.updateCanvas()
  }

  renderCover(context) {
    templates.cover(context, {
      cover: this.props.data.cover,
      title: this.props.data.name,
      desc: this.props.data.uname,
      presents: "renyan presents"
    })
  }

  componentDidUpdate() {
    this.updateCanvas()
  }

  renderPreface(context) {
    if (this.props.side == 1) {
      templates.preface(context, {
        content: this.props.data,
      })
    }
  }

  renderContent(context) {
    if (this.props.side == 1) {
      templates.content(this.props.data.left)(context, {
        texts: this.props.data.card_left.text,
        text: this.props.data.card_left.text,
        image: this.props.data.card_left.pictureBig
      })
    } else {
      templates.content(this.props.data.right)(context, {
        texts: this.props.data.card_right.text,
        text: this.props.data.card_right.text,
        image: this.props.data.card_right.pictureBig
      })
    }
    templates.pagecorner(context, {
      side: this.props.side,
      number: this.props.number,
      name: this.props.album
    })
  }

  updateCanvas() {
    var canvas = this.refs.canvas
    var context = canvas.getContext('2d')
    context.clearRect(0, 0, canvas.width, canvas.height)
    context.fillStyle = 'white'
    context.fillRect(0, 0, canvas.width, canvas.height)
    if (this.props.type == 'cover') {
      this.renderCover(context)
    } else if (this.props.type == 'preface') {
      this.renderPreface(context)
    } else {
      this.renderContent(context)
    }
  }

  render() {
    return (
      <div className="ry_page_item">
        <canvas ref="canvas" width={419 * utils.scale} height={595 * utils.scale} />
      </div>
    )
  }
}

module.exports = Page
