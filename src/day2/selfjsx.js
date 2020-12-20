class Element{
  constructor(type,props,children) {
    this.type = type
    this.props = props
    this.children = children
  }
  fn(str) {
    return str.replace(/[A-Z]/g,function(a){
      return '-'+a.toLowerCase()
    }).replace('^-','')
  }
  render() {
    // 把虚拟DOM 变成真实DOM
    let ele = document.createElement(this.type)
    // 把行内属性放上去
    // Object.keys(this.props)
    for(let k in this.props) {
      // 排除共有属性
      if(this.props.hasOwnProperty(k)) {
        // 私有属性 calssName htmlFor style
        // ele.setAttribute(k, this.props[k])
        switch (k) {
          case 'className':
            ele.setAttribute('class',this.props[k])
            break;
          case 'htmlFor':
            ele.setAttribute('for',this.props[k])
            break;
          case 'style':
            // 对应的值是一个 对象 我们需要转换成字符串
            let str='';
            console.log(this.props[k],Object.keys(this.props[k]), '123')
            Object.keys(this.props[k]).forEach(key => {
              str += `${this.fn(key)}: ${this.props[k][key]};` 
            })
            ele.setAttribute('style',str)
            break;
          default:
            ele.setAttribute(k, this.props[k])
            break;
        }
      }
    }

    this.children.forEach(item => {
      // item 可能是字符串 也有可能是虚拟DOM
      // 字符串 直接转换成DOM节点
      // 虚拟DOM(Element的实例) 需要调用render
      item instanceof Element ? ele.appendChild(item.render()) : ele.appendChild(document.createTextNode(item))
    })

    return ele; // 返回渲染好的真实DOM
  }
}

let React = {
  createElement(type,props,...children) {
    // let children = [].splice.call(arguments,2)
    // type 对应的标签名
    // props 行内属性
    return new Element(type,props,children)
  }
}

let ReactDOM = {
  render(ele,container) {
    // ele 是一个虚拟DOM
    // 要把虚拟DOM渲染好了 然后塞到container中
    container.appendChild(ele.render())
  }
}











let h2 = React.createElement('div',{className:'h1box'},'呵呵呵',React.createElement('h2',{className:'h2',style:{color:'red'}}, '哈哈哈'))

ReactDOM.render(h2, document.getElementById('root'))