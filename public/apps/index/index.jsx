import React from 'react'
import ReactDOM from 'react-dom'
import autoBind from 'react-autobind'

import Page from '../../parts/Page/index.jsx'
import Navigation from '../../parts/Navigation/index.jsx'
import Control from '../../parts/Control/index.jsx'
import {modellist} from '../../templates'

import axios from 'axios'

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
    items.push(this.item(null))
    this.state.rows.forEach(row => {
      items.push(this.item(row))
    })
    return items
  }

  item(row) {
    var type = row ? 'content' : 'preface'
    return (
      <div className="pages_row">
        <Page type={type} side={0} data={row} />
        <Page type={type} side={1} data={row}/>
      </div>
    )
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

  render() {
    return (
      <div>
        <Navigation />
        <Control make={this.make}/>
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
