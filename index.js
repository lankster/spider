const express = require('express')

const app = express()

app.get('/', (req, res) => {
  res.send("hello from Eric's sick web app, version 1!")
})

app.set('port', process.env.PORT || 3000)

app.listen(app.get('port'), () => {
  console.log(`Listening on port ${appPort}!`)
})
