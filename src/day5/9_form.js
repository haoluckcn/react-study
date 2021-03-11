import React from 'react'
import ReactDOM from 'react-dom'

const FormContext = React.createContext()
const ItemContext = React.createContext()

class Form extends React.Component {
  render() {
    let { initialValue, onFinish, children } = this.props
    // children.forEach(item => {
    //   item.props[item.props.username] = initialValue[item.props.username]
    // })
    return <FormContext.Provider value={{initialValue, onFinish}}>
      <div>
        {children}
      </div>
    </FormContext.Provider>
  }
}

class Item extends React.Component {
  static contextType = FormContext
  render() {
    let { label, name, children } = this.props
    return <ItemContext.Provider value={{...this.context,name}}>
      <div>
        {label}{children}
      </div>
    </ItemContext.Provider>
  }
}

Form.Item = Item

class Input extends React.Component {
  static contextType = ItemContext
  state = {
    value: this.context.initialValue[this.context.name]
  }
  change = (e) => {
    this.context.initialValue[this.context.name] = e.target.value
    this.setState({
      value: e.target.value
    })
  }
  render() {
    let value = this.state.value
    return <input value={value} onChange={this.change} />
  }
}

class Button extends React.Component {
  static contextType = ItemContext
  render() {
    return <button onClick={(e) => {
      // 规则校验
      this.context.onFinish()
    }}>
      {this.props.children}
    </button>
  }
}

class App extends React.Component {
  state = {
    initValue: {
      username: 'haolucky',
      password: 123
    }
  }
  finish = () => {
    console.log('提交')
    console.log(this.state.initValue)
  }
  render() {
    let { initValue } = this.state
    return <div>
      <Form
        initialValue={initValue}
        onFinish={this.finish}
      >
        <Form.Item
          label="Username"
          name="username"
        >
          <Input />
        </Form.Item>
        <Form.Item
          label="Password"
          name="password"
        >
          <Input />
        </Form.Item>
        <Form.Item>
          <Button>提交</Button>
        </Form.Item>
      </Form>
    </div>
  }
}

ReactDOM.render(<App />, document.getElementById('root'))