import React from 'react'
import ReactDOM from 'react-dom'
import './day2.less'
let h1 = <div className='h1box'>
  呵呵呵
  <h2 className='h2' style={{color:'red'}}>哈哈哈</h2>
</div>

let h2 = React.createElement('div',{className:'h1box'},'呵呵呵',React.createElement('h2',{className:'h2',style:{color:'red'}}, '哈哈哈'))

ReactDOM.render(<>
  {h1}{h2}
</>, document.getElementById('root'))