// Update with your config settings.

module.exports = {
  development: {
    client: 'mysql',
    connection: {
      database: 'pagination_poc',
      user:     'root',
      password: 'example'
    },
    pool: {
      min: 2,
      max: 10
    },
    migrations: {
      tableName: 'knex_migrations'
    }
  }
};
