const client = require('../client')

const createArtist = async ({ artist_name, artwork, artworkId }) => {
    try {
        const {
            rows: [artists],
            //INSERT SQL query
        } = await client.query (
            `
                INSERT INTO artists(artist_name, artwork, "artworkId")
                VALUES($1, $2, $3)
                RETURNING *;
            `,
            [artist_name, artwork, artworkId]
        )
        return artists
    } catch (error) {
        throw error
    }
}

const getAllArtists = async () => {
    try {
        const { rows }
         = await client.query(`
         SELECT artists.*, artwork.artist
         FROM artists
         INNER JOIN artwork
         ON artists.artworkId = artwork.artworkId;
        `)
        return rows
    } catch (error) {
        throw error
    }
}

const getArtistById = async (artistsId) => {
    try {
        const {
            rows: [artist]
        } = await client.query(
            `
                SELECT *
                FROM artists
                WHERE "artistsId" =${artistsId};
            `
        )
        return artist
    } catch (error) {
        throw error
    }
}

module.exports = { createArtist, getAllArtists, getArtistById }