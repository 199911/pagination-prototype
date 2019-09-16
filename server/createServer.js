const express = require('express')

const createServer = (itemService) => {
    const app = express()
    app.get('/items', async (req, res) => {
      const { token } = req.query;
      const result = await itemService.getPage(token);
      console.log(result)
      res.json(result);
    })
    app.listen(3000)
}

module.exports = createServer;