const express = require('express')
const app = express()
const port = 3000

//import de la fonction connectTodb
const {connectTodB} = require("./services/db/connection.js")

app.get('/', (req, res) => {
  res.send('Hello World!')
})

// Le port d'écoute
app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
  connectTodB()
})