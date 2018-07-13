const Alert = require('./../models/Alert.js');

// Display list of all alerts
exports.alert_list = (req, res) => {
    res.send('NOT IMPLEMENTED: Alert list');
};

// Display form to edit an alert on GET
exports.alert_edit = (req, res) => {
    res.send('NOT IMPLEMENTED: Alert edit GET: ' + req.params.id);
};

// Handle form to edit an alert on POST
exports.alert_edit = (req, res) => {
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

// Handle delete alert on POST
exports.alert_delete = (req, res) => {
    res.send('NOT IMPLEMENTED: Alert delete POST: ' + req.params.id);
};
