'use strict'

module.exports = function setRoutes (app) {
  app.get('/:name?', (req, res) => {
    res.send(`Hello, ${req.params.name || 'anonymous'}, this is Eric's sick web app!`)
  })
}
