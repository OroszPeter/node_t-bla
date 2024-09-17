const express = require('express')
const app = express()
const port = 3000
var a = 0
var b = 0

app.get('/', (req, res) => {
  res.send(
    `${a}    -   ${b}</br>
      <a href='/inca'>inca</a> - <a href='/incb'>incb</a></br>
      <a href='/deca'>deca</a> - <a href='/decb'>decb</a>`)
})

app.get('/inca', (req, res) => {
    res.send(
        a++,
        res.send(`${a}    -   ${b}</br>
      <a href='/inca'>inca</a> - <a href='/incb'>incb</a></br>
      <a href='/deca'>deca</a> - <a href='/decb'>decb</a>`)
        )
  })

  app.get('/incb', (req, res) => {
    res.send(
        b++,
        res.send(`${a}    -   ${b}</br>
      <a href='/inca'>inca</a> - <a href='/incb'>incb</a></br>
      <a href='/deca'>deca</a> - <a href='/decb'>decb</a>`)
        )
  })

  app.get('/deca', (req, res) => {
    res.send(
        a--,
        res.send(`${a}    -   ${b}</br>
      <a href='/inca'>inca</a> - <a href='/incb'>incb</a></br>
      <a href='/deca'>deca</a> - <a href='/decb'>decb</a>
      `)
        )
  })

  app.get('/decb', (req, res) => {
    res.send(
        b--,
        res.send(`${a}    -   ${b}</br>
      <a href='/inca'>inca</a> - <a href='/incb'>incb</a></br>
      <a href='/inca'>inca</a> - <a href='/decb'>decb</a>`)
        )
  })


app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})