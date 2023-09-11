const client = require("../client")

const createSubject = async ({ type }) => {
    try {
        const {
            rows: [subjects],
            //INSERT SQL query
        } = await client.query (
            `
                INSERT INTO subjects(type)
                VALUES($1)
                RETURNING *;
            `,
            [type]
        )
        return subjects
    } catch (error) {
        throw error
    }
}

const getAllSubjects = async () => {
    try {
        const { rows }
         = await client.query(`
            SELECT *
            FROM subjects;
        `)
        return rows
    } catch (error) {
        throw error
    }
}

const getSubjectsById = async (subjectsId) => {
    try {
        const {
            rows: [subjects]
        } = await client.query(
            `
                SELECT *
                FROM subjects
                WHERE "subjectsId" =${subjectsId};
            `
        )
        return subjects
    } catch (error) {
        throw error
    }
}

module.exports = { createSubject, getAllSubjects, getSubjectsById }