const knex = require('knex');

class KnexFactory {
  createMysql () {
    return knex({
      client: 'mysql',
      connection: {
        host : 'localhost',
        user : 'root',
        password : 'example',
        database : 'pagination_poc'
      }
    })
  }
}

module.exports = KnexFactory;
