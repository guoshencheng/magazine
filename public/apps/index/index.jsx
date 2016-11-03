import React from 'react'
import ReactDOM from 'react-dom'
import autoBind from 'react-autobind'

import Page from '../../parts/Page/index.jsx'
import Navigation from '../../parts/Navigation/index.jsx'
import Control from '../../parts/Control/index.jsx'
import {modellist} from '../../templates'
import series from 'async/series'
import axios from 'axios'
const prefix = 'row_item_'
require('./style.scss')

const page = {
  currentPage:1,
  pageSize: 400
}

const urls = {
  FETCH_BY_AID: 'http://operation.renyan.cn/rest/noauth/card/select_by_album_id'
}

var fetchContentByAid = (aid) => {
  var params = Object.assign(page, {aid: aid})
  return axios.get(urls.FETCH_BY_AID, {
    params: params
  })
}

class RowItem extends React.Component {
  constructor(props){
     super(props);
     autoBind(this);
  }
  render() {
    var type = this.props.row ? 'content' : 'preface'
    return (
      <div className="pages_row">
        <Page ref="left" type={type} side={0} data={this.props.row} />
        <Page ref="right" type={type} side={1} data={this.props.row}/>
      </div>
    )
  }
}

class Create extends React.Component {
  constructor(props){
     super(props);
     autoBind(this);
     this.state = {
       rows: [],
       cards: []
     }
     this.renyan = this.renyan || {}
     this.renyan.aid = 0
  }

  items() {
    let items = []
    items.push(<RowItem ref={prefix + "0"}/>)
    this.state.rows.forEach((row, index) => {
      var ref = prefix + (index + 1)
      items.push(<RowItem row={row} ref={ref} />)
    })
    return items
  }

  generateModels(cards) {
    var index = 0
    var datas = []
    var id = 0
    while(index < cards.length) {
      var i = id % (modellist.length)
      var model = modellist[i]
      var data
      if (model.count == 1) {
        data = Object.assign({}, model, {card_left: cards[index], card_right: cards[index]})
        index ++
      } else {
        var right = index + 1 < cards.length ? cards[index + 1] : null
        data = Object.assign({}, model, {card_left: cards[index], card_right: right})
        index += 2
      }
      id ++
      datas.push(data)
    }
    return datas
  }

  make(aid) {
    this.renyan.aid = aid
    fetchContentByAid(aid).then(value => {
      var rows = this.generateModels(value.data.cards)
      this.setState({rows})
    }).catch(reason => {
      console.log(reason)
    })
  }

  operation(doc, index) {
    var rowitem = this.refs[prefix + index]
    var leftCanvas = rowitem.refs.left.refs.canvas
    var rightCanvas = rowitem.refs.right.refs.canvas
    return (cb) => {
      var left = leftCanvas.toDataURL("image/jpeg", 0.5)
      var right = rightCanvas.toDataURL("image/jpeg", 0.5)
      doc.addImage(left, 0, 0, 148.5, 210)
      doc.addImage(right, 148.5, 0, 148.5, 210)
      doc.addPage()
      cb(null, prefix + index)
    }
  }

  onClickExport() {
    var doc = new jsPDF({
      orientation: 'landscape',
    })
    var ops = [this.operation(doc, 0), ...this.state.rows.map((row, index)=> {
      return this.operation(doc, index + 1)
    })]
    console.log(ops)
    series(ops, (err, results) => {
      console.log(err, results)
      doc.save('download')
    })
  }

  render() {
    return (
      <div>
        <Navigation />
        <Control make={this.make} export={this.onClickExport}/>
        <div className="common_container">
          <p>封面</p>
          <Page type={'cover'}/>
        </div>
        <div className="common_container">
          <p>杂志内容</p>
          {this.items()}
        </div>
      </div>
    )
  }
}

ReactDOM.render(
  <Create />,
  document.querySelector('#topContainer')
)
