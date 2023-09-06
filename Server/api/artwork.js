const express = require('express');
const router = express.Router();

const { createArtwork, getAllArtwork, getArtworkById, updateArtwork, deleteArtwork } = require('../db/helpers/artwork');

// GET - /api/artwork - get all artwork
router.get('/', async (req, res, next) => {
    try{
        const artworks = await getAllArtwork();
        res.send(artworks);
    } catch (error) {
        next(error);
    }
});

// GET - /api/artwork/:artworkId - get artwork by id
router.get('/:artworkId', async (req, res, next) => {
    try{
        const artwork = await getArtworkById(req.params.artworkId);
        res.send(artwork);
    } catch (error) {
        next(error);
    }
});

//POST - /api/artwork - create a new artwork
router.post('/', async (req, res, next) => {
    try{
        const artwork = await createArtwork(req.body);
        res.send(artwork);
    } catch (error) {
        next(error);
    }
});

// PUT - /api/artwork/:artworkId - update an artwork
router.put('/:artworkId', async (req, res, next) => {
    try{
        const artwork = await updateArtwork(req.params.artworkId, req.body);
        res.send(artwork);
    } catch (error) {
        next(error);
    }
});

// DELETE - /api/artwork/:artworkId - delete an artwork
router.delete('/:artworkId', async (req, res, next) => {
    try{
        const artwork = await deleteArtwork(req.params.artworkId);
        res.send(artwork);
    } catch (error) {
        next(error);
    }
});

module.exports = router;