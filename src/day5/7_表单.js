import React from 'react'
import ReactDOM from 'react-dom'

/* 
受控组件 VS 非受控组件
*/

class App2 extends React.Component {
  state = {
   name: 'haolucky'
 }
 change = (e) => {
   console.log(e.target.value)
   this.setState({
     name: e.target.value
   })
 }
 render() {
   let {name} = this.state
   return <div className=''>
     <h1>{name}</h1>
     <button onClick={()=>{this.setState({name: 666})}}>按钮</button>
     <input type='text' value={name} onChange={this.change} />
   </div>
 }
}
class App extends React.Component {
   state = {
    name: 'haolucky'
  }
  componentDidMount() {
    // vue 的 muounted
    this.inp.value = this.state.name
  }
  change = (e) => {
    this.setState({
      name: e.target.value
    })
  }
  render() {
    let {name} = this.state
    return <div className=''>
      <h1>{name}</h1>
      <button onClick={()=>{this.setState({name: 666})}}>按钮</button>
      <input type='text' ref={el => this.inp = el} onChange={this.change} />
    </div>
  }
}

ReactDOM.render(<App2 />, document.getElementById('root'))