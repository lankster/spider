const express = require('express')
const setRoutes = require('./set-routes')

const app = express()

app.set('port', process.env.PORT || 3000)

setRoutes(app)

app.listen(app.get('port'), () => {
  console.log(`Listening on port ${app.get('port')}...`)
})
