const express = require('express');
const router = express.Router();


// GET home page
router.get('/home', (req, res, next) => {
    res.send('Well HAllo there!!!!!');
});

module.exports = router;