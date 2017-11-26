import React from 'react'
import PropTypes from 'prop-types'

class App extends React.Component {
  render () {
    return <h1>{this.props.txt}</h1>
  }
}

App.propTypes = {
  txt: PropTypes.string
}

export default App
