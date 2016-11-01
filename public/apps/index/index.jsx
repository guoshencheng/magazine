import React from 'react'
import ReactDOM from 'react-dom'
import autoBind from 'react-autobind'

import ReactList from 'react-list'
import Page from '../../parts/Page/index.jsx'
import Navigation from '../../parts/Navigation/index.jsx'
import Control from '../../parts/Control/index.jsx'

import {contents} from '../../../logic/stores'

import axios from 'axios'

require('./style.scss')

class Create extends React.Component {
  constructor(props){
     super(props);
     autoBind(this);
     contents.subscribe(() => {
       console.log(contents.getState())
     })
  }

  renderItem(index, key) {
    var type
    var data
    if (index == 0) {
      type = 0
      data = {}
    }
    return (
      <div className="pages_row">
        <Page />
        <Page />
      </div>
    )
  }

  make() {
    contents.dispatch({type: 0, data: 1})
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
