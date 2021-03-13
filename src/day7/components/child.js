import React from 'react'
import store from '../store'

class Child extends React.Component {
  componentDidMount() {
    store.subscribe(() => {
      this.setState({})
    })
  }
  render() {
    return <div className=''>
      <h3>{store.getState().count}</h3>
    </div>
  }
}

export default Child