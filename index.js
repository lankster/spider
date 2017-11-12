const express = require('express')

const app = express()

app.get('/', (req, res) => {
    res.send('hello from get handler!')
})

const appPort = process.env.PORT || 3000
app.listen(appPort, ()=>{
    console.log(`Listening on port ${appPort}!`)
})