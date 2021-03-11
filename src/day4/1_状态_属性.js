import React from 'react'
import ReactDOM from 'react-dom'

// 普通函数（静态组件） 类组件
// 组件的两大数据源：
  // state 状态 （data）
  // props 属性 （props）

class App extends React.Component {
  // constructor(props) {
  //   super(props) // 相当于 call 继承
  //   console.log(props)
  //   this.state = {
  //     name: 'haolucky'
  //   }
  //   this.state123 = {
  //     age: 20
  //   }
  // }
  state = {
    name: 'haolucky'
  }
  state123 = {
    age: 20
  }
  render() {
    const {name} = this.state
    const {className} = this.props
    return <div className={this.props.className}>
      <h1>姓名是{this.state.name} 年龄是{this.state123.age}</h1>
      <h2>name: {name} className: {className}</h2>
    </div>
  }
}

ReactDOM.render(<App className='box' qqq='123' />, document.getElementById('root'))