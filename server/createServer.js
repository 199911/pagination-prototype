const express = require('express')

const createServer = ({itemService, port}) => {
  const app = express()
  app.get('/items', async (req, res) => {
    const { token } = req.query;
    const result = await itemService.getPage(token);
    res.set('Access-Control-Allow-Origin', '*').json(result);
  })
  app.listen(port)
}

module.exports = createServer;