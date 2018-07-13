const express = require('express');
const router = express.Router();

// Controller modules
const home_controller = require ('./../controllers/homeController.js')

// GET request for home page
router.get('/home', home_controller.home_get);

// POST request for home page
router.post('/home', home_controller.home_post);


module.exports = router;