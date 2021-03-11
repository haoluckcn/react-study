class Element {
  constructor(dom, props, children) {
    this.dom = dom
    this.props = props
    this.children = children
  }
  chengeKey(str) {
    return str.replace(/[A-Z]/,function(a) {
      return '-'+a.toLowerCase()
    })
  }
  render() {
    const ele = document.createElement(this.dom)
    Object.keys(this.props || {}).forEach(item => {
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

const React = {
  createElement(dom, props, ...children){
    return new Element(dom, props, children)
  }
}

const ReactDOM = {
  render(dom, box) {
    box.appendChild(dom.render())
  }
}

/* 
const ele = <div className="box">
  divdiv
  <b>bbb</b>
  <i>iiiiiii</i>
  <input type="checkbox" id="aaa" />
  <label htmlFor="aaa">点击</label>
</div>
*/

// const ele = React.createElement('div', {className: 'box'}, 'divdiv')
const ele = React.createElement('div',{className: 'box'}, 'hello', React.createElement('b',null,'bbb'), React.createElement('i',{style: {color: 'red',fontSize: '30px'}},'iiiiiii'), React.createElement('input',{type:"checkbox",id:"aaa"},''), React.createElement('label',{htmlFor: 'aaa'},'点我'))

ReactDOM.render(ele, document.getElementById('root'))

console.log(ele)