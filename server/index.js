const createServer = require('./createServer');
const KnexFactory = require('./KnexFactory');
const CursorBasedItemService = require('./CursorBasedItemService');
const PageBasedItemService = require('./PageBasedItemService');

const mysql = (new KnexFactory()).createMysql()
const pageItemService = new PageBasedItemService(mysql);
const cursorItemService = new CursorBasedItemService(mysql);
createServer({itemService: pageItemService, port: 4000});
createServer({itemService: cursorItemService, port: 4001});
