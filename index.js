const express = require('express')

const app = express()

app.get('/:name?', (req, res) => {
  res.send(`Hello, ${req.params.name || 'anonymous'}, this is Eric's sick web app!`)
})

app.set('port', process.env.PORT || 3000)

app.listen(app.get('port'), () => {
  console.log(`Listening on port ${app.get('port')}...`)
})
