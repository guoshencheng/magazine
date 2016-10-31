import React from 'react'
import ReactDOM from 'react-dom'
import autoBind from 'react-autobind'

import ReactList from 'react-list'
import Page from '../../parts/Page/index.jsx'
import Navigation from '../../parts/Navigation/index.jsx'
import Control from '../../parts/Control/index.jsx'

import axios from 'axios'

require('./style.scss')

class Create extends React.Component {
  constructor(props){
     super(props);
     autoBind(this);
     console.log(env)
  }

  renderItem() {
    return (
      <div className="pages_row">
        <Page />
        <Page />
      </div>
    )
  }

  make() {
    axios.get('http://operation.renyan.cn/rest/noauth/card/select_by_album_id', {
      params: {
        aid: 1,
        currentPage: 1,
        pageSize: 10
      }
    }).then(value => {
      console.log(value.data)
    }).catch(reason => {
      console.log(reason.response)
    })
  }

  render() {
    return (
      <div>
        <Navigation />
        <Control make={this.make}/>
        <div className="common_container">
          <p>封面</p>
          <Page />
        </div>
        <div className="common_container">
          <p>杂志内容</p>
          <ReactList itemRenderer={this.renderItem} length={50} type='uniform' />
        </div>
      </div>
    )
  }
}

ReactDOM.render(
  <Create />,
  document.querySelector('#topContainer')
)
