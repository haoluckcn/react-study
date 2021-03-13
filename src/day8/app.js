import React, { useEffect, useState } from 'react'
import ReactDOM from 'react-dom'
import { HashRouter, Route, Link, NavLink, Switch, withRouter, Redirect } from 'react-router-dom'
// import About from './components/about'
// import Home from './components/home'

function loadable(obj) {
  let { loader, loading: Loading } = obj
  let Com = null;
  return function (props) {
    let [flag, setFlag] = useState(false)
    // let [Com, setCom] = useState(null)
    if(!flag) {
      loader().then(data => {
        // data 是一个导出对象
        // data.default ===> Home组件
        Com = data.default
        // setCom(data.default)
        setFlag(true)
      })
    }
    return <>
      {
        flag ? <Com {...props} /> : <Loading />
      }
    </>
  }
}

const Home = loadable({
  loader: () => import(/*webpackChunkName:"home"*/'./components/home'),
  loading(){
    return <div>Loading...</div>
  }
})
const About = loadable({
  loader: () => import(/*webpackChunkName:"about"*/'./components/about'),
  loading(){
    return <div>Loading...</div>
  }
})



function A(){
  return <h2>AAA</h2>
}
function B(props){
  console.log(props)
  return <h2>BBB</h2>
}

// B = withRouter(B) // 想让那些不是通过路由渲染的组件能使用路由的API

let isLogin = true
let userLevel = 2
function Protect(params) {
  // useEffect(() => {
  //   return () => {
  //     alert('离开')
  //   }
  // }, [])

  let obj = {}
  let str = window.location.search
  str.replace(/([^?=&]+)=([^?=&]+)/g, function(a,b,c) {
    obj[b] = c
  })
  console.log(obj)

  if(isLogin) {
    let { level = 0, path, component: Com } = params
    if(userLevel >= level) {
      return <Route path={path} render={(props) => {
        return <Com {...props} query={obj} />
      }}></Route>
      // return <Route {...params} query={obj} />
    } else {
      return <Redirect to='/404' />
    }
  } else {
    return <Redirect to='/login' />
  }
}


class App extends React.Component {
  render() {
    return <div className=''>
      <div>
        <Link to='/home'>首页</Link>
        <Link to='/about'>关于</Link>
      </div>
      <div>
        <NavLink to='/home?a=123&&b=456'>首页</NavLink>
        <NavLink to='/about'>关于</NavLink>
      </div>
      <Switch>
        <Redirect exact path='/' to='/home' />
        {/* <Route path='/' render={() => {
          console.log('////')
          return <h2>//////</h2>
        }} /> */}
        {/* <Route path='/home' component={Home} /> */}
        <Route path='/about' component={About} />

        <Protect path='/home' component={Home} />

        <Route path='/a/:qq' render={(props)=>{
          // return 1 > 2 ? <A {...props} /> : <B {...props} />
          if(isLogin) {
            return <A {...props} />
          } else {
            return <Redirect to='/login' />
          }
        }} />
        <Route path='/*' render={()=><h1>404</h1>} />
      </Switch>
    </div>
  }
}

ReactDOM.render(<HashRouter>
  <App />
</HashRouter>, document.getElementById('root'))