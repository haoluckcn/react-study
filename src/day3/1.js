/* 
 元素上的类名 需要使用 className
 结构中的变量或者表达式 必须使用 {} 包起来
 对象不能直接放到结构中使用
 列表循环 产生一个结构数组 然后直接把数组扔进去
 判断的编写 直接写一个判断即可
 行内样式 必须是一个 style={对象}
 dangerouslySetInnerHTML={{__html: 结构字符串}}
 for 使用 htmlFor
*/

import React from 'react'

let htmlStr = `<h1><i>dangerouslySetInnerHTML</i></h1>`

export function Hello1() {
  let name = 'haolucky'
  let h1 = <h1>hhhhhhh{name}</h1>
  // let obj = {
  //   a: name,
  //   b: h1
  // }
  let arr = [1,2,3,4,5,6]
  let arr2 = [<i key='1'>7</i>,<i key='2'>8</i>]
  function fn(n) {
    return n > 2 ? <h1 style={{color: 'blue'}}>错误</h1> : <h1>正确</h1>
  }
  let sty = {color:'red',fontSize:'30px'}
  return <div className='class' style={sty}>
    <input type="checkbox" id="aaa" /><label htmlFor="aaa">点我</label><br />
    你好 {name}
    {h1}
    {/* {obj} */}
    {arr}
    {arr2}
    {
      arr.map((item,index) => <p key={index}>{item}</p>)
    }
    {
      1 > 2 ? <h1>错误</h1> : <h1>正确</h1>
    }
    {fn(3)}
    <div dangerouslySetInnerHTML={{__html: htmlStr}}></div>
  </div>
}

export function Hello2() {
  let a = React.createElement('h1', { className: 'box' }, 'hello world')
  let b = <h1 className='box'>hello world</h1>
  return <div>
    世界{a}{b}
  </div>
}

function hello() {
  return <div>
    nihao 
  </div>
}

export class Hello3 extends React.Component{
  render(){
    return <h1>class</h1>
  }
}

export default hello