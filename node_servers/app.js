const express = require('express')
const app = express()
const port = 3000


app.use(express.static('public'));


app.get('/', (req, res) => {
  res.send('Hello World!')
})


app.listen(port, () => {
  console.log(`http://127.0.0.1:${port}`)
})