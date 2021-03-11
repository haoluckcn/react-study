// import React from 'react'
// import ReactDOM from 'react-dom'

class Element {
  constructor(type, props, children) {
    this.type = type
    this.props = props
    this.children = children
  }
  chengeKey(str) {
    // 把驼峰转成烤串
    return str.replace(/[A-Z]/,function(a) {
      return '-'+a.toLowerCase()
    })
  }
  render() {
    // 返回真实DOM元素
    let ele = document.createElement(this.type)
    Object.keys(this.props || {}).forEach(item => {
      // ele.setAttribute(item, this.props[item])
      switch (item) {
        case 'className':
          ele.setAttribute('class', this.props[item])
          break;
        case 'style':
          let str = ''
          Object.keys(this.props.style).forEach(attr => {
            attr.replace(/[A-Z]/,)
            str += `;${this.chengeKey(attr)}:${this.props.style[attr]}`
          })
          console.log(str)
          ele.setAttribute('style', str)
          break;
        case 'htmlFor':
          ele.setAttribute('for', this.props[item])
          break;
        default:
          ele.setAttribute(item, this.props[item])
          break;
      }
    })
    this.children.forEach(item => {
      typeof item === 'string' ?
      ele.appendChild(document.createTextNode(item)) :
      ele.appendChild(item.render())
    })
    return ele
  }
}

let React = {
  createElement(type, props, ...children){
    return new Element(type, props, children)
  }
}

let ReactDOM = {
  render(ele, box) {
    box.appendChild(ele.render())
  }
}

/* 
let ele = <div className='box'>
hello <b>bbb</b><i style={{{color: 'red',fontSize: '30px'}}}>iii</i><input type="checkbox" id="aaa" /><label htmlFor="aaa">点我</label>
</div>
*/
let ele = React.createElement('div',{className: 'box'}, 'hello', React.createElement('b',null,'bbb'), React.createElement('i',{style: {color: 'red',fontSize: '30px'}},'iii'), React.createElement('input',{type:"checkbox",id:"aaa"},''), React.createElement('label',{htmlFor: 'aaa'},'点我'))

ReactDOM.render(ele, document.getElementById('root'))