import React from 'react'
import ReactDOM from 'react-dom'

// 事件遵循的是小驼峰命名
// react当中的事件 我们一般称作合成事件
class App extends React.Component {
  state = {
    name: 'haolucky'
  }
  fn(e) {
    console.log(this, e)
  }
  fn3 = () => {
    console.log(this)
  }
  render() {
    // 这一层中的this 是当前实例
    const f = this.fn.bind(this)
    const f2 = (e) => {this.fn(e)}
    return <div className=''>
      <button onClick={this.fn}>按钮</button>
      <button onClick={this.fn.bind(this)}>按钮2</button>
      <button onClick={f}>按钮3</button>
      <button onClick={(e) => {this.fn(e)}}>按钮4</button>
      <button onClick={f2}>按钮5</button>
      <button onClick={this.fn3}>按钮6</button>
      <button onClick={() => {this.fn()}}>按钮7</button>
    </div>
  }
}

ReactDOM.render(<App />, document.getElementById('root'))