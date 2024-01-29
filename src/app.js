const express = require('express')
const app = express()
const port = 3000

//import de la fonction connectTodb
const {connectTodB} = require("./services/db/connection.js")

//import de la fonction findOne
const {findOne} = require("./services/db/crud.js")

// route helloworld
app.get('/', (req, res) => {
  res.send('Hello World!')
})

// route de test de fonction
app.get('/test_findOne',() => {
  findOne()
})

// Le port d'écoute
app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
  connectTodB()
})