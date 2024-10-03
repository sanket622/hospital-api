const Report = require('../../../models/reportModel');

exports.create_report = async (req, res) => {
    const doctorId = req.user._id; 
    const patientId = req.params.id;

    try {
        const { status } = req.body;
        await Report.create({ doctor: doctorId, patient: patientId, status });

        return res.status(201).json({
            success: true,
            msg: 'Report created successfully!'
        });
    } catch (err) {
        return res.status(500).json({
            success: false,
            msg: err.message
        });
    }
};

exports.all_reports = async (req, res) => {
    try {
        const reports = await Report.find({ patient: req.params.id });
        return res.status(200).json(reports);
    } catch (err) {
        return res.status(500).json({
            success: false,
            msg: err.message
        });
    }
};

exports.report_by_status = async (req, res) => {
    try {
        const reports = await Report.find({ status: req.params.status });
        return res.status(200).json(reports);
    } catch (err) {
        return res.status(500).json({
            message: err.message
        });
    }
};
