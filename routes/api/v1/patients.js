const express = require('express');
const router = express.Router();
const patientController = require('../../../controllers/api/v1/patient_controller');
const passport = require('passport');

router.post('/register', passport.authenticate('jwt', { session: false }), patientController.register);

<<<<<<< HEAD
module.exports = router;
=======
 router.post('/register',verifyToken, patientController.register);
 router.get('/all_patients',patientController.all_patients);

 
 //- /patients/:id/create_report
 router.post('/:id/create_report',verifyToken,reportController.create_report);
 router.get('/:id/all_reports',  reportController.all_reports);


module.exports = router;
>>>>>>> 0433db7294c33361619c252a5f13a14e37851a5b
