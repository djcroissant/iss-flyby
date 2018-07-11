const express = require('express');
const router = express.Router();


// GET alerts
router.get('/all', (req, res, next) => {
    res.send('Display alerts');
});

module.exports = router;