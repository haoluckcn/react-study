import React, { useState } from 'react'
import ReactDOM from 'react-dom'

// 自定义hook是一个函数，其名称以 'use' 开头，函数内部可以调用其他的hook， 主要应用于 逻辑的抽离
function useCount(){ 
  let [count, setCount] = useState(100)
  function add() {
    setTimeout(() => {
      setCount(count + 1)
    }, 1000)
  }
  return [count, add]
}

function App(){
  let [count, add] = useCount()
  return <>
    <h1>{count}</h1>
    <button onClick={add}>+</button>
  </>
}

ReactDOM.render(<App />, document.getElementById('root'))