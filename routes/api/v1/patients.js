const express = require('express');
const router = express.Router();
const patientController = require('../../../controllers/api/v1/patient_controller');
const passport = require('passport');

router.post('/register', passport.authenticate('jwt', { session: false }), patientController.register);

module.exports = router;
