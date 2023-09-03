const client = require('../client')

async function createArtwork({ artwork }) {
    try {
        const {
            rows: [art]
        } = await client.query(`
            INSERT INTO artwork(art)
            VALUES($1)
            RETURNING *;
        `, [artwork]
        )
        return art
    } catch (error) {
        throw error
    }
}

module.exports = { createArtwork }