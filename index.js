const server = require('./src/server/server.js')

const PORT = process.env.PORT || 3000

server.listen(PORT, () => {
  console.log(`listening on port ${PORT}`)
})
