import {createStore} from 'redux'
import request from 'superagent'

import reducers from './reducers'
let initialState = {}
if (window.__INITIAL_STATE__) {
  initialState = window.__INITIAL_STATE__
  delete window.__INITIAL_STATE__
}

const store = createStore(reducers, initialState)
store.subscribe(() => {
  request.post('/save-state')
    .send({state: store.getState()})
    .end()
})

export default store
