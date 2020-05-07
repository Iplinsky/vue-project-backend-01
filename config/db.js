const config = require('../knexfile.js')
const knex = require('knex')(config)

// Executa a(s) Migrations
knex.migrate.latest([config])
module.exports = knex