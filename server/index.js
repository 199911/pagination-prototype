const createServer = require('./createServer');
const KnexFactory = require('./KnexFactory');
const CursorBasedItemService = require('./CursorBasedItemService');
const PageBasedItemService = require('./PageBasedItemService');

const mysql = (new KnexFactory()).createMysql()
// const itemService = new CursorBasedItemService(mysql);
const itemService = new PageBasedItemService(mysql);
createServer(itemService);
