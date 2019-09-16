const KnexFactory = require('../server/KnexFactory');
const ItemService = require('../server/ItemService');



const main = async () => {
    const mysql = (new KnexFactory()).createMysql()
    const itemService = new ItemService(mysql);
    await itemService.addItem('Hello', 123)
    await itemService.addItem('World', 987)
    mysql.destroy();
}
main();