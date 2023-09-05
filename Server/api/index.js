const express = require('express');
const router = express.Router();

// GET /api/health
router.get('/health', (req, res, next) => {
    res.send('OK');
});

// ROUTER: /api/artwork
router.use('/artwork', require('./artwork'));

// ROUTER: /api/buyers
router.use('/buyers', require('./buyers'));

// ROUTER: /api/subjects
router.use('/subjects', require('./subjects'));

module.exports = router;