const express = require("express")
const router = express.Router()
const app = express()

const porta = 3334

app.use(express.json())

function mostraHora(request, response) {
const date = new Date()
const hora = date.toLocaleTimeString('pt-BR') 
response.send(hora)
}


function mostraPorta() {
  console.log("servidor criado e rodando na porta ", porta)
}

app.use(router.get('/hora', mostraHora))
app.listen(porta, mostraPorta)