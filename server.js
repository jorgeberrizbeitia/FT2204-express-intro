const express = require('express')
const { copyFileSync } = require('fs')
const app = express()
const port = 3000

// configuraciones del servidor
app.use(express.static("public")) // esto indica a express donde estan ubicados los elementos estaticos como imagenes, css, etc

app.get('/', (req, res) => {
  res.send('Hello World!')
})

app.get("/patata", (req, res) => {
  res.send("Aqui tienes una patata")
})

app.get("/amigos/todos", (req, res) => {
  res.send("Estos son todos mis amigos...")
})

// PARAMS
app.get("/amigos/:name", (req, res) => {

  // console.log(req.params)
  const { name } = req.params

  if (name === "caro") {
    res.send("Este es el perfil de mi amiga Caro")
  } else if (name === "eva") {
    res.send("Este es el perfil de mi amiga Eva")
  } else {
    res.send("Lo siento, no tengo más amigos :(")
  }

})

// REQ.PARAMS
// '/greet/hello/3'
app.get("/greet/:word/:number", (req, res) => {
  console.log(req.params)
  let { word, number } = req.params

  word = word + " "
  let newWord = word.repeat(number)

  // otra opcion
  let emptyStr = "";
  // ... hacer un bucle y en cada iteracion hacer += word + " "

  res.send(newWord)
})

// REQ.QUERY
// http://localhost:3000/search?name=jorge&age=35
app.get("/search", (req, res) => {
  console.log(req.query)
  res.send("buscando algo")
  // eventualmente usaremos esa info en req.query para hacer busquedas
})

app.get("/home", (req, res) => {
  res.sendFile(__dirname + "/views/home.html")
})

app.get("/about", (req, res) => {
  res.sendFile(__dirname + "/views/about.html")
})

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})