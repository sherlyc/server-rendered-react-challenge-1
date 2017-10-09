import {createStore} from 'redux'

import reducers from './reducers'
let initialState = {}
if (window.__INITIAL_STATE__) {
  initialState = window.__INITIAL_STATE__
  delete window.__INITIAL_STATE__
}

console.log(initialState)

export default createStore(reducers, initialState)
