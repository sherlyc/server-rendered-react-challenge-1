import request from 'supertest'
import cheerio from 'cheerio'

import server from './server'

it.skip('GET / returns the html for the react component', () => {
  return request(server)
    .get('/')
    .then((res) => {
      const $ = cheerio.load(res.text)
      expect($('li').length).toBe(3)
    })
})
