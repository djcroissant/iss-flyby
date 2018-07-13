const express = require('express');
const router = express.Router();

// Controller modules
const alert_controller = require ('./../controllers/alertController.js')

// GET list of all alerts
router.get('/', alert_controller.alert_list);

// GET request to edit an alert
router.get('/:alert_id/edit', alert_controller.alert_edit_get);

// POST request to edit an alert
router.post('/:alert_id/edit', alert_controller.alert_edit_post);

// GET request to create an alert
router.get('/create', alert_controller.alert_create_get);

// POST request to create an alert
router.post('/create', alert_controller.alert_create_post);

// GET request to delete an alert
router.get('/:alert_id/delete', alert_controller.alert_delete_get);

// POST request to delete an alert
router.post('/:alert_id/delete', alert_controller.alert_delete_post);


module.exports = router;