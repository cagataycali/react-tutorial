import React from 'react'

class App extends React.Component {
  constructor () {
    super()
    this.state = {
      a: '',
      b: ''
    }
  }
  update (e) {
    this.setState({
      a: this.a.value,
      b: this.refs.b.value
    })
  }

  render () {
    return (
      <div>
        <input
          ref={node => this.a = node}
          type='text' onChange={this.update.bind(this)} />
        {this.state.a}
        <hr />
        <input
          ref='b'
          type='text' onChange={this.update.bind(this)} />
        {this.state.b}
      </div>
    )
  }
}

export default App
