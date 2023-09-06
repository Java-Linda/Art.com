const express = require('express');
const router = express.Router();

const { createBuyer, getAllBuyers, getBuyersById } = require('../db/helpers/buyers');

// GET - /api/buyers - get all buyers
router.get('/', async (req, res, next) => {
    try{
        const buyers = await getAllBuyers();
        res.send(buyers);
    } catch (error) {
        next(error);
    }
});

// GET - /api/buyers/:buyerId - get buyer by id
router.get('/:buyerId', async (req, res, next) => {
    try{
        const buyer = await getBuyersById(req.params.buyerId);
        res.send(buyer);
    } catch (error) {
        next(error);
    }
});

//POST - /api/buyer - create a new buyer
router.post('/', async (req, res, next) => {
    try{
        const buyer = await createBuyer(req.body);
        res.send(buyer);
    } catch (error) {
        next(error);
    }
});

// PUT - /api/buyers/:buyerId - update an artwork
router.put('/:buyerId', async (req, res, next) => {
    try{
        const buyer = await updateBuyer(req.params.buyerId, req.body);
        res.send(buyer);
    } catch (error) {
        next(error);
    }
});

// DELETE - /api/buyers/:buyerId - delete a buyer
router.delete('/:buyerId', async (req, res, next) => {
    try{
        const buyer = await deleteBuyer(req.params.buyerId);
        res.send(buyer);
    } catch (error) {
        next(error);
    }
});

module.exports = router;