const development = {
  client: 'pg',
  connection: {
    host: 'DB HOST',
    user: 'DB USER',
    password: 'DB PASS',
    database: 'DB NAME',
    port: 'PORT'
  }
}

const production = {
  client: 'pg',
  connection: {
    host: 'DB HOST',
    user: 'DB USER',
    password: 'DB PASS',
    database: 'DB NAME',
    port: 'PORT'
  }
}

// DO NOT USE ES6 IMPORTS, KNEX DOESN'T SUPPORT
module.exports = { development, production }