import React from 'react'
import ReactDOM from 'react-dom'
import store from './store'
/* 
Provider 就是用来包住根组件的
connect 是哪个组件想用 redux 中的数据 就用 connect 处理哪个组件
*/
import {connect, Provider} from 'react-redux'
import Child2 from './components/child2'
import Child3 from './components/child2_2'

class App extends React.Component {
  render() {
    console.log(this)
    let {state,dispatch} = this.props
    return <div className=''>
      <h1>{state.count}</h1>
      <button onClick={()=>{dispatch({type: 'add', qqq: 20})}}>+</button>
      <button onClick={()=>{dispatch({type: 'minus', www: 10})}}>-</button>
    </div>
  }
}

App = connect((state) => ({state}), (dispatch) => ({dispatch}))(App)

ReactDOM.render(<Provider store={store}>
  <App />
  <Child2 />
  <Child3 />
</Provider>, document.getElementById('root'))

/* 
redux 我们使用的就使用一个 createStore 即可, 产生一个store
reducer 的编写 把握住 得提供初始装填 reducer 函数的返回值 就是新的 state

react-redux 把握住一 用 Provider 包含住根组件 并且给 Provider 传递一个store 属性 属性值就是redux产生的那个store

以后哪个组件想用 redux 中的数据 就使用 connect 处理对应的组件即可

connect(回调函数1，回调函数2)(要处理的组件)
回调函数1的 行参对应的是 redux 中的 state 返回值必须是一个对象，这个对象中的属性回传给对应的组件
回调函数2的 行参对应的是 redux 中的 dispatch 返回值必须是一个对象，这个对象中的属性回传给对应的组件

若组件不需要更新 则回调函数2可以省略
*/