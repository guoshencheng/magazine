import React from 'react'
import ReactDOM from 'react-dom'
import autoBind from 'react-autobind'

import ReactList from 'react-list'
import Page from '../../parts/Page/index.jsx'
import Navigation from '../../parts/Navigation/index.jsx'
import Control from '../../parts/Control/index.jsx'

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

  render() {
    return (
      <div>
        <Navigation />
        <Control />
        <ReactList itemRenderer={this.renderItem} length={50} type='uniform' />
      </div>
    )
  }
}

ReactDOM.render(
  <Create />,
  document.querySelector('#topContainer')
)
