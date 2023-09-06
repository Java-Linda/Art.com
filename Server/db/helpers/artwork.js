const client = require('../client')

const createArtwork = async ({ name, artist, creation_date, medium, subjectsId }) => {
    try {
        const {
            rows: [artwork],
            //INSERT SQL query
        } = await client.query (
            `
                INSERT INTO artwork(name, artist, creation_date, medium, "subjectsId")
                VALUES($1, $2, $3, $4, $5)
                RETURNING *;
            `,
            [name, artist, creation_date, medium, subjectsId]
        )
        return artwork
    } catch (error) {
        throw error
    }
}

const getAllArtwork = async () => {
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

const getArtworkById = async (artworkId) => {
    try {
        const {
            rows: [artwork]
        } = await client.query(
            `
                SELECT *
                FROM artwork
                WHERE "artworkId" =${artworkId};
            `
        )
        return artwork
    } catch (error) {
        throw error
    }
}

const updateArtwork = async (artworkId, body) => {
    try{
        const { rows } = await client.query(
            `
            UPDATE artwork
            SET artwork_name = '${body.artwork_name}',
            artist = '${body.artist}',
            creation_date = '${body.creation_date}',
            medium = '${body.medium}',
            "subjectsId" = '${body.subjectsId}'
            WHERE "artworkId" = ${artworkId}
            RETURNING *;
            `
        );
        return rows;
    } catch (error) {
        throw error;
    }
};

const deleteArtwork = async (artworkId) => {
    try{
        const { rows } = await client.query(
            `
            DELETE FROM artwork
            WHERE "artworkId" = ${artworkId}
            RETURNING *;
            `
        );
        return rows;
    } catch (error) {
        throw error;
    }
}

module.exports = { createArtwork, getAllArtwork, getArtworkById, updateArtwork, deleteArtwork }