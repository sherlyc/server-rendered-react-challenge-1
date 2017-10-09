import nightmare from 'nightmare'
import cheerio from 'cheerio'

import server from './server'

describe('integration tests', () => {
  let app
  beforeEach(() => {
    app = server.listen(6679)
  })
  afterEach(() => {
    app.close()
  })
  it('GET / returns the html for the react component', async () => {
    let page = nightmare().goto('http://localhost:6679')
    let html = await page.evaluate(() => document.body.innerHTML).end()
    const $ = cheerio.load(html)
    expect($('li').length).toBe(3)
  })
  it.skip('can add delete a todo', async () => {
    let page = nightmare().goto('http://localhost:6679')
    let html = await page
                .click('.TaskList #delete-1')
                .evaluate(() => document.body.innerHTML).end()
    const $ = cheerio.load(html)
    expect($('li').length).toBe(2)
  })
})
