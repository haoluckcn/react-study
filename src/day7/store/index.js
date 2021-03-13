import { createStore, combineReducers } from 'redux'

import {ADD,MINUS,CHANGENAME} from './types'

/* 
纯函数 作用：1.提供初始状态 2.修改状态
*/
function CountReducer(state, action) {
  state = state || {
    count: 100,
    name: 123,
    age: 345
  }
  switch (action.type) {
    case ADD:
      let num = action.qqq || 1
      num *= 2
      return {
        ...state,
        count: state.count + num
      }
    case MINUS:
      return {
        ...state,
        count: state.count - action.www
      }
    default:
      return {
        ...state
      }
  }
}

const nameInit = {
  name: 'haolucky'
}

function NameReducer(state, action) {
  state = state || nameInit
  /* if(action.name) {
    return {
      ...state,
      name: action.name
    }
  } else {
    return {
      ...state
    }
  } */

  // return {
  //   ...state,
  //   name: action.name || state.name
  // }

  switch (action.type) {
    case CHANGENAME:
      return{
        ...state,
        name: action.name
      }
    default:
      return{
        ...state
      }
  }
}

const rootReducer = combineReducers({
  countState: CountReducer,
  nameState: NameReducer
})

const store = createStore(rootReducer)

export default store