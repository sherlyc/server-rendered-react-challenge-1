import React from 'react'
import { createStore } from 'redux'
import { Provider } from 'react-redux'
import { renderToString } from 'react-dom/server'

import express from 'express'

import reducers from '../reducers'
import App from '../components/App'
const app = express()

app.get('/', (req, res) => {
  const store = createStore(reducers, {})
  const html = renderToString(<Provider store={store}><App/></Provider>)
  res.send(html)
})

module.exports = app
