import React from 'react'
import ReactDOM from 'react-dom'
import autoBind from 'react-autobind'
import utils from '../../lib/utils'
import templates from '../../templates'
import models from '../../templates/models'

require('./style.scss')
const a = '我，普普通通80后妈妈，每天忙碌的工作之余最喜欢的就是逛逛菜市场，你可以说我没有品位，可这才是最真实的我。我一直希望自己能游遍天下，欣赏不同的风俗，'
+ '\n但我更中意的是不同的美食。从一个地方的食物中，'
+ '\n我们能领略到一个地方的风土人情，人文信仰，生活习俗。出生在大连，从小吃着妈妈做的菜长大，'
+ '\n那时候没觉得有多么好吃，可自从离开家后才发现，'
+ '\n其实那种平淡的味道早已深深地印刻在我的心里，'
+ '\n妈妈的味道也就变成了我最喜欢的味道。'
+ '\n我希望土豆将来也能记得起妈妈的味道，'
+ '\n索性将这些味道整理出来，'
+ '\n于是有了这本《妈妈的味道》。'
  + '\n将来也许还会有《妈妈的味道之凉菜》·'
+ '\n《妈妈的味道之面食》·'
+ '\n《妈妈的味道之家常菜》'

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
      cover: '/images/logo.png',
      title: "造字工房尚雅",
      desc: "方正兰亭纤黑",
      presents: "renyan presents"
    })
  }

  renderPreface(context) {
    if (this.props.side == 1) {
      templates.preface(context, {
        content: a,
        cover: '/images/logo.png',
        title: "造字工房尚雅",
        desc: "方正兰亭纤黑",
        presents: "renyan presents"
      })
    }
  }

  renderContent(context) {
    if (this.props.side == 1) {
      templates.content(models.singleText)(context, {
        texts: a
      })
    } else {
      templates.content(models.bigSingleImage)(context, {
        image: '/images/logo.png'
      })
    }
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
