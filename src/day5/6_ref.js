import React, { createRef, useRef } from 'react'
import ReactDOM from 'react-dom'

/* 
<h1 ref='box'>haolucky</h1> this.refs.box 废弃
<h1 ref={(el) => {this.qqq = el}}>haolucky</h1> this.qqq
this.xxx = createRef(); <h1 ref={this.xxx}></h1> this.xxx.current

ref 可以用来获取类组件，但是不能用来获取静态组件（里面是可以使用的）
*/

class Child1 extends React.Component {
  aaa() {
    console.log(111)
  }
  render() {
    return <i>child1</i>
  }
}

function Child2() {
  const i = useRef()
  function fn() {
    console.log(i)
  }
  return <div>
    <i ref={i}>child2</i>
    <button onClick={fn}>获取i</button>
  </div>
}

class App extends React.Component {
  fn = () => {
    console.log(this)
    this.www.current.aaa()
  }
  www = createRef()
  render() {
    return <div>
      <h1 ref='box'>haolucky</h1>
      <h1 ref={(el) => {this.qqq = el}}>haolucky</h1>
      <h1 ref={this.www}>haolucky</h1>
      <Child1 ref={this.www} />
      <Child2 />
      <button onClick={this.fn}>按钮</button>
    </div>
  }
}

ReactDOM.render(<App />, document.getElementById('root'))