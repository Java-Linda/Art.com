const express = require('express');
const router = express.Router();

const { createArtist, getAllArtists, getArtistById } = require('../db/helpers/artists');
const { artists } = require('../db/seedData');

// GET - /api/artists - get all artists
router.get('/', async (req, res, next) => {
    try{
        const artists = await getAllArtists();
        res.send(artists);
    } catch (error) {
        next(error);
    }
});

// GET - /api/artists/:artistsId - get artist by id
router.get('/:artistsId', async (req, res, next) => {
    try{
        const artist = await getArtistById(req.params.artistsId);
        res.send(artist);
    } catch (error) {
        next(error);
    }
});

//POST - /api/artists - create a new artist
router.post('/', async (req, res, next) => {
    try{
        const artist = await createArtist(req.body);
        res.send(artist);
    } catch (error) {
        next(error);
    }
});

module.exports = router;