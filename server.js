const express = require('express')

const app = express()

const PORT = process.env.PORT || 3000

app.use(express.static(__dirname + '/nosso-tempero/frontend'))
app.get('/*', (req, res) => {
  res.sendFile(__dirname + '/nosso-temper/frontend/index.html')
})

app.listen(PORT, () => {
  console.log(`Servidor iniciado na porta ${PORT}`)
})
