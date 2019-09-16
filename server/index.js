const createServer = require('./createServer');
const KnexFactory = require('./KnexFactory');
const ItemService = require('./ItemService');

const mysql = (new KnexFactory()).createMysql()
const itemService = new ItemService(mysql);
createServer(itemService);
