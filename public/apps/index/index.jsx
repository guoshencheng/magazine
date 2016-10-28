import React from 'react'
import ReactDOM from 'react-dom'
import autoBind from 'react-autobind'

import Navigation from '../../parts/Navigation/index.jsx'
import Control from '../../parts/Control/index.jsx'

require('./style.scss')

class Create extends React.Component {
  constructor(props){
     super(props);
     autoBind(this);
     console.log(env)
  }
  render() {
    return (
      <div>
        <Navigation />
        <Control />
      </div>
    )
  }
}

ReactDOM.render(
  <Create />,
  document.querySelector('#topContainer')
)
