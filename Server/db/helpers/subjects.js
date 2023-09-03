const client = require("../client")

const createSubject = async ({ name, artist, creation_date, medium, subjectId }) => {
    try {
        const {
            rows: [subjects],
            //INSERT SQL query
        } = await client.query (
            `
                INSERT INTO subjects(Classic, Modern, Abstract, Impressionism, Surrealism)
                VALUES($1, $2, $3, $4, $5 )
                RETURNING *;
            `,
            [Classic, Modern, Abstract, Impressionism, Surrealism]
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