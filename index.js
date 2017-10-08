const server = require('./src/server/server.js')

const PORT = process.env.PORT || 4000

server.listen(PORT, () => {
  console.log(`listening on port ${PORT}`)
})
