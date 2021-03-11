import React, { useEffect, useState } from 'react'
import ReactDOM from 'react-dom'

// class App extends React.Component {
//   state = {
//     count: 100
//   }
//   componentDidMount() {
//     document.title = `当前count是${this.state.count}`
//   }
//   componentDidUpdate() {
//     document.title = `当前count是${this.state.count}`
//   }
//   add = () => {
//     this.setState({
//       count: this.state.count + 1
//     })
//   }
//   render(){
//     return <>
//       <h1>{this.state.count}</h1>
//       <button onClick={this.add}>+</button>
//     </>
//   }
// }

/* 
useEffect(回调函数)
这个函数会在DOM加载或者更新完成之后触发
相当于类组件的 componentDidMount 和 componentDidUpdate 的结合体

useEffect(回调函数, []) 
这个函数会在DOM加载完成之后触发
相当于类组件的 componentDidMount

useEffect(回调函数, [依赖]) 
当依赖发生改变的时候执行

回调函数的返回值 可以是一个函数，返回的这个函数会在下一次回调函数执行之前或者组件卸载的时候执行
*/

function App(){
  let [count,setCount] = useState(100)
  let [name,setName] = useState('haolucky')
  let add = () => {
    setCount(count+1)
  }
  // document.title = `当前count是${count}`
  console.log('render')
  useEffect(() => {
    console.log('dom ok')
    document.title = `当前count是${count}`
    return () =>{
      console.log('hahaha')
    }
  },[name])
  return <>
    <input type='text' value={name} onChange={(e) => setName(e.target.value)} />
    <h1>{count}---{name}</h1>
    <button onClick={add}>+</button>
  </>}

ReactDOM.render(<App />, document.getElementById('root'))