import React from 'react'
import ReactDOM from 'react-dom'
import Input from './Input'
import Button from './Button'
import List from './List'
class App extends React.Component {
  state = {
    ary: [
      {id: 1, value:123},
      {id: 2, value:1232},
      {id: 3, value:1233},
      {id: 4, value:1234},
      {id: 5, value:1235},
    ],
    todo: ''
  }
  del(item) {
    this.setState({
      ary: this.state.ary.filter(val=>val.id!==item.id)
    })
  }
  change = (e) => {
    this.setState({
      todo: e.target.value
    })
  }
  enter = (e) => {
    this.setState({
      todo: '',
      ary: [{id: Math.random(), value: this.state.todo}].concat(this.state.ary)
    })
  }
  render() {
    let { ary, todo } = this.state
    return <div className=''>
      <Input value={todo} onChange={this.change} onEnter={this.enter} />
      <List data={ary} render={(item) => {
        return <>
          <i>{ item.value }</i>
          <Button onClick={() => {this.del(item)}}>X</Button>
        </>
      }} />
    </div>
  }
}

ReactDOM.render(<App />, document.getElementById('root'))