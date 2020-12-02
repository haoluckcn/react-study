import React from 'react'
import ReactDom from 'react-dom'
import './1.less'
var name = 'hello world'

/* 
jsx
结构中的变量 都得用 {} 包起来
组件的根元素 只能有一个标签 但是可以是一个空标签
结构中不能编写关键字 class --> className  for --> htmlFor
结构中不能直接把对象 作为儿子； 若是数组 则直接把拼接的结果扔到了结构中
循环结构 一般使用map

style={{color:'red'}} 这不是小胡子 而是大括号 包了一个对象


*/
function mymap(ary){
  let t = []
  for(var i=0;i<ary.length;i++) {
    t.push(<li key={i+10}>{ary[i]}</li>)
  }
  return t
}

function List(){
  var obj = {a:12,b:13}
  var style= {color:'blue',fontSize:'12px'}
  var h1 = <h1 className='text' style={style}>哈哈哈</h1>
  var ary = [1,2,3,4,5]
  var ary2 = [<i key='1'>1</i>,<i key='2'>2</i>,<i key='3'>3</i>,<i key='4'>4</i>,<i key='5'>5</i>]
  var href = 'https://baidu.com'
  function fn() {
    if(1>2) {
      return <h2>666</h2>
    } else {
      return <h3>888</h3>
    }
  }
  return <ul className={'box' + name} style={{color:'red',fontSize:'18px'}}>
    {
      ary.map(item => {
      return <li key={item}>{item}</li>
      })
    }
    {mymap(ary)}
<li><a href='https://baidu.com'>百度</a></li>
<li><a href={href}>跳转</a></li>
  <li>{
    1 > 2 ? <h2>2</h2> : <h3>三元运算符</h3>
    }</li>
  <li>{fn()}</li>
<li>{name}</li>
<li>{obj.a}</li>
<li>{h1}</li>
<li>{obj.b}</li>
<li>{ary}</li>
<li>{ary2}</li>
<li><input type='checkbox' name='' id='qqq' /><label htmlFor='qqq'>珠峰</label></li>
</ul>
}

let q = React.createElement('h1', {className: 'hhh'}, '好好好')
ReactDom.render(<>
  <h1>我的第一天</h1>
  {/**在react的结构模版中 想要使用变量 需要用{变量和表达式 类似于vue的小胡子} 包起来 */}
  {name}
  {q}
  <List></List>
</>,document.querySelector('#root'))