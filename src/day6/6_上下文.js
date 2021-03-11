import React, { useContext } from 'react'
import ReactDOM from 'react-dom'

let Context = React.createContext() // 创建一个上下文

function Chong() {
  const context = useContext(Context)
  return <h4>重孙子{context.count}</h4>
}

class Sun extends React.Component {
  static contextType = Context
  render(){
    return <>
      <h3>孙子{this.context.count}</h3>
      <Chong />
    </>
  }
}

class Child extends React.Component {
  static contextType = Context
  render(){
    return <>
      <h2>儿子{this.context.count}</h2>
      <Sun />
    </>
  }
}

class App extends React.Component {
  state = {
    count: 100
  }
  render() {
    return <div className=''>
      <button onClick={()=>{this.setState({count: this.state.count + 1})}}>+</button>
      <Context.Provider value={this.state}>
        <Child />
      </Context.Provider>
    </div>
  }
}

ReactDOM.render(<App />, document.getElementById('root'))