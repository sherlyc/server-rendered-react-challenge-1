import React from 'react'
import { createStore } from 'redux'
import { Provider } from 'react-redux'
import { renderToString } from 'react-dom/server'

import express from 'express'

import shuffle from '../utils/shuffle'
import reducers from '../reducers'
import App from '../components/App'
const app = express()

app.get('/', (req, res) => {
  const store = createStore(reducers, {})
  const shuffledStore = createStore(reducers, {tasks: shuffle(store.getState().tasks)})
  const html = renderToString(<Provider store={shuffledStore}><App/></Provider>)
  res.send(`<body>
    <div id='root'>${html}</div>
    <script>window.__INITIAL_STATE__ = ${JSON.stringify(shuffledStore.getState())}</script>
    <script type='text/javascript' src='/bundle.js'></script>
    </body>
  `)
})

app.use(express.static(__dirname + '/../../public'))


module.exports = app
