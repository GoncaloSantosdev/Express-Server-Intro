const express = require('express')
const app = express()
const port = 4000

app.get('/', (req, res) => {
  res.send('Goncalo Santos');
})

app.get('*', (req, res) => {
    res.status(404).send('<h1>404! Page not found</h1>');
  });


app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})