const createServer = require('./createServer');
const KnexFactory = require('./KnexFactory');
const CursorBasedItemService = require('./CursorBasedItemService');

const mysql = (new KnexFactory()).createMysql()
const itemService = new CursorBasedItemService(mysql);
createServer(itemService);
