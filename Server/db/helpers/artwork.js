const client = require('../client')

const createArtwork = async ({ name, artist, creation_date, medium, subjectId }) => {
    try {
        const {
            rows: [artwork],
            //INSERT SQL query
        } = await client.query (
            `
                INSERT INTO artwork(name, artist, creation_date, medium, "subjectId")
                VALUES($1, $2, $3, $4, $5)
                RETURNING *;
            `,
            [name, artist, creation_date, medium, subjectId]
        )
        return artwork
    } catch (error) {
        throw error
    }
}

const getAllArtworks = async () => {
    try {
        const { rows }
         = await client.query(`
            SELECT *
            FROM artwork;
        `)
        return rows
    } catch (error) {
        throw error
    }
}

module.exports = { createArtwork, getAllArtworks }