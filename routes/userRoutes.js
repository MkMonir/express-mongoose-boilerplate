const express = require('express');
const authController = require('./../controllers/authController');

const router = express.Router();

router.route('/signup').post(authController.signup);
router.route('/login').post(authController.login);
router.route('/logout').get(authController.logout);

router.route('/forgotPassword').post(authController.forgotPassword);
router.route('/resetPassword/:token').patch(authController.resetPassword);

// note: PROTECT ALL ROUTES AFTER THIS MIDDLEWARE
router.use(authController.protect);

router.route('/updateMyPassword').patch(authController.updateMyPassword);

// note: RESTRICT ALL ROUTES AFTER THIS MIDDLEWARE
router.use(authController.restrictTo('admin'));

router.route('/').get();

module.exports = router;
