const express = require('express')
const path = require('path')

const app = express()
const APP_DIST_FOLDER = 'nosso-tempero/frontend'
const DEFAULT_PAGE = 'index.html'

const PORT = process.env.PORT || 3000

app.use(express.static(__dirname))
app.get('*', (req,res) => {
  res.sendFile(path.join(__dirname, APP_DIST_FOLDER, DEFAULT_PAGE))
})
// app.use(express.static(__dirname + '/nosso-tempero/frontend'))
// app.get('/*', (req, res) => {
//   res.sendFile(__dirname + '/nosso-temper/frontend/index.html')
// })
app.use((req, res) => {
  console.error('Resource not found')
})

app.listen(PORT, () => {
  console.log(`Servidor iniciado na porta ${PORT}`)
})
