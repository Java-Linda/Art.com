const { Client } = require('pg')

const art = 'art'
const client = new Client(`postgres://localhost:5432/${art}`)

module.exports = client