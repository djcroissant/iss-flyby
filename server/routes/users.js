const express = require('express');
const router = express.Router();

// Controller modules
const user_controller = require ('./../controllers/userController.js')


// GET request for login
router.get('/login', user_controller.login_get);

// POST request for login
router.post('/login', user_controller.login_post);

// GET request for logout
router.get('/logout', user_controller.logout_get);

// POST request for logout
router.post('/logout', user_controller.logout_post);

// GET request for signup
router.get('/signup', user_controller.signup_get);

// POST request for signup
router.post('/signup', user_controller.signup_post);

// GET request for user profile
router.get('/profile', user_controller.user_profile);

// GET request to update user profile
router.get('/profile/update', user_controller.user_profile_update_get);

// POST request to update user profile
router.post('/profile/update', user_controller.user_profile_update_post);


module.exports = router;