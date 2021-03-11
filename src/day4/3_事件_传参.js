import React from 'react'
import ReactDOM from 'react-dom'

// 事件遵循的是小驼峰命名
// react当中的事件 我们一般称作合成事件
class App extends React.Component {
  state = {
    name: 'haolucky'
  }
  fn(n) {
    console.log(arguments)
  }
  fn3 = (n) => {
    console.log(n)
  }
  fn4 = (n) => {
    console.log(n)
  }
  render() {
    return <div className=''>
      <button onClick={this.fn}>按钮</button>
      <button onClick={this.fn.bind(this, 2)}>按钮2</button>
      <button onClick={(e) => {this.fn3(3,e,4,e)}}>按钮3</button>
      <button onClick={this.fn4}>按钮4</button>
    </div>
  }
}

ReactDOM.render(<App />, document.getElementById('root'))