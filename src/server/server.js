import express from 'express'
const app = express()

app.get('/', (req, res) => {
  res.send('render react here')
})

module.exports = app
