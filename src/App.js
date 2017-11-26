import React from 'react'

class App extends React.Component {
  constructor () {
    super()
    this.state = {
      val: 0
    }
    this.update = this.update.bind(this)
  }

  componentWillMount () {
    console.log('componentWillMount')
  }

  componentDidMount () {
    console.log('componentDidMount')
  }

  update () {
    this.setState({val: this.state.val + 1})
  }

  render () {
    console.log('Render')
    return <button onClick={this.update}>{this.state.val}</button>
  }
}

export default App
