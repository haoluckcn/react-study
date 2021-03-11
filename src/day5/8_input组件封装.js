import React from 'react'
import ReactDOM from 'react-dom'

function Input(props) {
  let {value, type='text', onChange, onPressEnter} = props
  function keydown(e) {
    if(e.keyCode === 13) {
      onPressEnter(e)
    }
  }
  return <input type={type} value={value} onChange={onChange} onKeyDown={keydown} />
}

class App extends React.Component {
   state = {
    name: 'haolucky'
  }
  change = (e) => {
    this.setState({
      name: e.target.value
    })
  }
  enter = () => {
    console.log('enter')
  }
  render() {
    return <div className=''>
      <h1>{this.state.name}</h1>
      <Input
        value={this.state.name}
        onChange={this.change}
        type='text'
        onPressEnter={this.enter}
       />
    </div>
  }
}

ReactDOM.render(<App />, document.getElementById('root'))