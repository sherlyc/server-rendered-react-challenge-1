import React from 'react'
import { createStore } from 'redux'
import { Provider } from 'react-redux'
import { renderToString } from 'react-dom/server'

import express from 'express'
import bodyParser from 'body-parser'
import serialize from 'serialize-javascript'

import shuffle from '../utils/shuffle'
import reducers from '../reducers'
import App from '../components/App'
const app = express()

let store = createStore(reducers, {})

app.use(bodyParser.json())

app.get('/', (req, res) => {
  const shuffledStore = createStore(reducers, {tasks: shuffle(store.getState().tasks)})
  const html = renderToString(<Provider store={shuffledStore}><App/></Provider>)
  res.send(`<body>
    <div id='root'>${html}</div>
    <script>window.__INITIAL_STATE__ = ${serialize(JSON.stringify(shuffledStore.getState()), {isJSON: true})}</script>
    <script type='text/javascript' src='/bundle.js'></script>
    </body>
  `)
})

app.post('/save-state', (req, res) => {
  store = createStore(reducers, req.body.state)
  res.sendStatus(201)
})

app.use(express.static(__dirname + '/../../public'))




module.exports = app
