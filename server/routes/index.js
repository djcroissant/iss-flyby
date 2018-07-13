const express = require('express');
const router = express.Router();


// GET home page
router.get('/home', (req, res, next) => {
    res.send('Well HAllO there!!!!!');
});

module.exports = router;