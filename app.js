const express = require('express')
const app = express()
const port = 4000

app.get('/', (req, res) => {
  res.send('Erich Fredersdorff')
})

app.get('/search', (req, res) => {
    res.status(200).send('This is a page.')
})

app.get('/unauthorized', (req, res) => {
    res.status(401).send('unauthorized route')
})

app.get('/forbidden', (req, res) => {
    res.status(403).send('forbidden route')
})

app.get('/notacceptable', (req, res) => {
    res.status(406).send('not acceptable route')
})

app.get('*', (req, res) => {
    res.status(404).send('This route has not been found.')
})

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})