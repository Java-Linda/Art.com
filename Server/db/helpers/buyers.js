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

const updateBuyer = async (buyerId, body) => {
    try{
        const { rows } = await client.query(
            `
            UPDATE buyer
            SET buyer_name = '${body.buyer_name}',
            username = '${body.username}',
            password = '${body.password}',
            address = '${body.address}'
            WHERE "buyerId" = ${buyerId}
            RETURNING *;
            `
        );
        return rows;
    } catch (error) {
        throw error;
    }
};

const deleteBuyer = async (buyerId) => {
    try{
        const { rows } = await client.query(
            `
            DELETE FROM buyers
            WHERE "buyerId" = ${buyerId}
            RETURNING *;
            `
        );
        return rows;
    } catch (error) {
        throw error;
    }
}

module.exports = { createBuyer, getAllBuyers, getBuyersById, updateBuyer, deleteBuyer }