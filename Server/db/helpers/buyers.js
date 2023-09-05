const client = require('../client')

const createBuyer = async ({ username, password, name, address }) => {
    try {
        const {
            rows: [buyer],
            //INSERT SQL query
        } = await client.query (
            `
                INSERT INTO buyers(username, password, name, address)
                VALUES($1, $2, $3, $4)
                RETURNING *;
            `,
            [username, password, name, address]
        )
        return buyer
    } catch (error) {
        throw error
    }
}

const getAllBuyers = async () => {
    try {
        const { rows }
         = await client.query(`
            SELECT *
            FROM buyers;
        `)
        return rows
    } catch (error) {
        throw error
    }
}

const getBuyersById = async (buyerId) => {
    try {
        const {
            rows: [buyers]
        } = await client.query(
            `
                SELECT *
                FROM buyers
                WHERE "buyerId" =${buyerId};
            `
        )
        return buyers
    } catch (error) {
        throw error
    }
}

module.exports = { createBuyer, getAllBuyers, getBuyersById }