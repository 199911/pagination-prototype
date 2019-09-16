const express = require('express')

const createServer = () => {
    const app = express()
    app.get('/', function (req, res) {
      res.send('Hello World')
    })
    app.listen(3000)
}

module.exports = createServer;