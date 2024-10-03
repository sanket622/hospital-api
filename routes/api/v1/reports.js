const express = require('express');
const router = express.Router();
const reportController = require('../../../controllers/api/v1/report_controller');
const passport = require('passport');

router.post('/:id/create_report', passport.authenticate('jwt', { session: false }), reportController.create_report);
router.get('/:id/all_reports', passport.authenticate('jwt', { session: false }), reportController.all_reports);
router.get('/:status', passport.authenticate('jwt', { session: false }), reportController.report_by_status);

module.exports = router;
