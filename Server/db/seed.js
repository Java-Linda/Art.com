const client = require('./client')

const { createBuyer, getAllBuyers, getBuyersById, updateBuyer, deleteBuyer } = require('./helpers/buyers')
const { createArtwork, getAllArtwork, getArtworkById, updateArtwork, deleteArtwork } = require('./helpers/artwork')
const { createSubject, getAllSubjects, getSubjectsById, updateSubject, deleteSubject } = require('./helpers/subjects')


const { buyers, artwork, subjects } = require('./seedData')

//Drop Tables for cleanliness
const dropTables = async () => {
    try {
        console.log("Starting to drop tables")
        await client.query(`
        DROP TABLE IF EXISTS buyers;
        DROP TABLE IF EXISTS artwork;
        DROP TABLE IF EXISTS subjects;
        `)
        console.log("Tables dropped!")
    } catch (error) {
        console.log("Error dropping tables")
        throw error
    }
}

const createTables = async () => {
    try {     
        console.log("Building tables...")
        await client.query(`
            CREATE TABLE buyers (
                "buyerId" SERIAL PRIMARY KEY,
                username VARCHAR(255) UNIQUE NOT NULL,
                password VARCHAR(255) UNIQUE NOT NULL,
                name VARCHAR(255) UNIQUE NOT NULL,
                address VARCHAR(255) UNIQUE NOT NULL
            );
            CREATE TABLE subjects (
                "subjectsId" SERIAL PRIMARY KEY,
                classic BOOLEAN,
                modern BOOLEAN,
                abstract BOOLEAN,
                impressionism BOOLEAN,
                surrealism BOOLEAN
            );
            CREATE TABLE artwork (
                "artworkId" SERIAL PRIMARY KEY,
                name VARCHAR(255) NOT NULL,
                artist VARCHAR(255) NOT NULL,
                creation_date VARCHAR(255) NOT NULL,
                medium VARCHAR(255) NOT NULL,
                "subjectsId" INTEGER REFERENCES subjects("subjectsId")
            );
       `)
        console.log("Tables built!")
    } catch (error) {
       throw error 
    }
}

const createInitialBuyer = async () => {
    try {
        for (const buyer of buyers) {
            await createBuyer(buyer)
        }
        console.log("created buyers")
    } catch (error) {
        throw error
    }
}

const createInitialArtwork = async () => {
    try {
        for (const art of artwork) {
            await createArtwork(art)
        }
        console.log("created artwork")
    } catch (error) {
        throw error
    }
}

const createInitialSubject = async () => {
    try {
        for (const subject of subjects) {
            await createSubject(subject)
        }
        console.log("created subjects")
    } catch (error) {
        throw error
    }
}

//Call all my functions and 'BUILD' database
const rebuildDb = async () => {
    try {
        client.connect()
        await dropTables()
        await createTables()

        //Generating starting data
        console.log("starting to seed...")
        await createInitialBuyer()
        await createInitialSubject()
        await createInitialArtwork()
        

    } catch (error) {
        console.error(error)
    } finally {
        client.end()
    }
}

rebuildDb()