import React from 'react'
import ReactDOM from 'react-dom'
class Child extends React.Component {
  shouldComponentUpdate(newProps, newState){
    if(this.props.name !== newProps.name) return true
    return false
  }
  render() {
    console.log('render')
    return <h1>Child -- {this.props.name}</h1>
  }
}

class Child2 extends React.PureComponent {
  render() {
    console.log('render2')
    return <h1>Child2 -- {this.props.name}</h1>
  }
}

class App extends React.Component {
  state = {
    name: 'haolucky',
    count: 100
  }
  change = (e) => {
    this.setState({
      name: e.target.value
    })
  }
  add = (e) => {
    this.setState({
      count: this.state.count + 1
    })
  }
  render() {
    return <div className=''>
      <h1>{this.state.count}</h1>
      <input type='text' value={this.state.name} onChange={this.change} />
      <button onClick={this.add}>+</button>
      <Child name={this.state.name} />
      <Child2 name={this.state.name} />
    </div>
  }
}

ReactDOM.render(<App />, document.getElementById('root'))