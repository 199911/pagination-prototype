const express = require('express')

const createServer = (itemService) => {
    const app = express()
    app.get('/items', async (req, res) => {
      const { token } = req.query;
      const result = await itemService.getPage(token);
      res.set('Access-Control-Allow-Origin', '*').json(result);
    })
    app.listen(4000)
}

module.exports = createServer;