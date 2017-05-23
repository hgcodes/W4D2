module.exports = {
  development: {
    client: 'pg',
    connection: {
      database: 'w4d2',
      user:     'development',
      password: 'development'
    },
    migrations: {
      tableName: 'knex_migrations'
    }
  }
};

