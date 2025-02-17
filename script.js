require('dotenv').config()
const express = require('express')
const app = express()
const port = 3000

app.get('/', (req, res) => {
  res.send('Hello World!')
})
app.get('/page', (req, res) => {
    res.send('I AM ATOMIC!')
  })
app.get('/login', (req, res) => {
    res.send('<h1>Login your page</h1>')
  })
  

app.listen(process.env.PORT, () => {
  console.log(`Example app listening on port ${port}`)
})