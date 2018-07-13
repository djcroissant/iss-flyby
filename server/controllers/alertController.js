const Alert = require('./../models/Alert.js');

// Display list of all alerts
exports.alert_list = (req, res) => {
    res.send('NOT IMPLEMENTED: Alert list');
};

// Display form to edit an alert on GET
exports.alert_edit_get = (req, res) => {
    res.send('NOT IMPLEMENTED: Alert edit GET: ' + req.params.id);
};

// Handle form to edit an alert on POST
exports.alert_edit_post = (req, res) => {
    res.send('NOT IMPLEMENTED: Alert edit POST: ' + req.params.id);
};

// Display form to create an alert on GET
exports.alert_create_get = (req, res) => {
    res.send('NOT IMPLEMENTED: Alert create GET');
};

// Handle form to create an alert on POST
exports.alert_create_post = (req, res) => {
    res.send('NOT IMPLEMENTED: Alert create POST');
};

// Display confirmation to delete alert on GET
exports.alert_delete_get = (req, res) => {
    res.send('NOT IMPLEMENTED: Alert delete GET: ' + req.params.id);
};

// Handle request to delete alert on POST
exports.alert_delete_post = (req, res) => {
    res.send('NOT IMPLEMENTED: Alert delete POST: ' + req.params.id);
};
