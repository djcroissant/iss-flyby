const User = require('./../models/User.js');

// Display login page on GET
exports.login = (req, res) => {
    res.send('NOT IMPLEMENTED: login GET');
};

// Handle login on POST
exports.login = (req, res) => {
    res.send('NOT IMPLEMENTED: login POST');
};

// Display logout page on GET
exports.logout = (req, res) => {
    res.send('NOT IMPLEMENTED: logout GET');
};

// Handle logout on POST
exports.logout = (req, res) => {
    res.send('NOT IMPLEMENTED: logout POST');
};

// Display signup page on GET
exports.signup = (req, res) => {
    res.send('NOT IMPLEMENTED: signup GET');
};

// Handle signup on POST
exports.signup = (req, res) => {
    res.send('NOT IMPLEMENTED: signup POST');
};

// Display user profile page
exports.user_profile = (req, res) => {
    res.send('NOT IMPLEMENTED: user profile');
};

// Display form to edit user profile on GET
exports.user_profile_edit = (req, res) => {
    res.send('NOT IMPLEMENTED: User profile edit GET: ' + req.params.id);
};

// Handle form to edit user profile on POST
exports.user_profile_edit = (req, res) => {
    res.send('NOT IMPLEMENTED: User profile edit POST: ' + req.params.id);
};

