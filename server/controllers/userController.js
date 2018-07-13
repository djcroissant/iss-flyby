const User = require('./../models/User.js');

// Display login page on GET
exports.login_get = (req, res) => {
    res.send('NOT IMPLEMENTED: login GET');
};

// Handle login on POST
exports.login_post = (req, res) => {
    res.send('NOT IMPLEMENTED: login POST');
};

// Display logout page on GET
exports.logout_get = (req, res) => {
    res.send('NOT IMPLEMENTED: logout GET');
};

// Handle logout on POST
exports.logout_post = (req, res) => {
    res.send('NOT IMPLEMENTED: logout POST');
};

// Display signup page on GET
exports.signup_get = (req, res) => {
    res.send('NOT IMPLEMENTED: signup GET');
};

// Handle signup on POST
exports.signup_post = (req, res) => {
    res.send('NOT IMPLEMENTED: signup POST');
};

// Display user profile page
exports.user_profile = (req, res) => {
    res.send('NOT IMPLEMENTED: user profile');
};

// Display form to update user profile on GET
exports.user_profile_update_get = (req, res) => {
    res.send('NOT IMPLEMENTED: User profile update GET: ' + req.params.id);
};

// Handle form to update user profile on POST
exports.user_profile_update_post = (req, res) => {
    res.send('NOT IMPLEMENTED: User profile update POST: ' + req.params.id);
};

