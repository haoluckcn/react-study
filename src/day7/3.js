import React from 'react'
import ReactDOM from 'react-dom'
import store from './store'
/* 
Provider 就是用来包住根组件的
connect 是哪个组件想用 redux 中的数据 就用 connect 处理哪个组件
*/
import {connect, Provider} from 'react-redux'


class App extends React.Component {
  getName=()=>{
    setTimeout(()=>{
      this.props.dispatch({type: 'CHANGENAME', name: 'ajax请求的name'})
    },1000)
  }
  render() {
    console.log(this)
    let {state,dispatch} = this.props
    return <div className=''>
      <input type='text' value={state.nameState.name} onChange={(e) => {dispatch({type:'CHANGENAME', name: e.target.value})}} />
      <h1>{state.countState.count} --- {state.nameState.name}</h1>
      <button onClick={()=>{dispatch({type: 'ADD', qqq: 20, name: 'hhhhh'})}}>+</button>
      <button onClick={()=>{dispatch({type: 'MINUS', www: 10})}}>-</button>
    </div>
  }
}

App = connect((state) => ({state}), (dispatch) => ({dispatch}))(App)

ReactDOM.render(<Provider store={store}>
  <App />
</Provider>, document.getElementById('root'))
