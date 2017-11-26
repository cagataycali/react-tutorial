import React from 'react'
import PropTypes from 'prop-types'

class App extends React.Component {
  render () {
    return <Title text='Hello world'/>
  }
}

const Title = props => <h1>Title {props.text}</h1>

Title.propTypes = {
  // text: PropTypes.string.isRequired
  text (props, propName, component) {
    if (!(propName in props)) {
      return new Error(` Missing ${propName}`)
    }
    if (props[propName].length < 6) {
      return new Error(`${propName} was too short.`)
    }
  }
}

export default App
