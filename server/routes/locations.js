const express = require('express');
const router = express.Router();

// Controller modules
const location_controller = require ('./../controllers/locationController.js')

// POST request to edit a location
router.post('/:location_id/edit', location_controller.location_edit_post);

// POST request to create a location
router.post('/create', location_controller.location_create_post);

// POST request to delete a location
router.post('/:location_id/delete', location_controller.location_delete_post);

// GET request to do Google Maps API lookup
router.get('/api_query/:location_query', location_controller.location_api_query);


module.exports = router;