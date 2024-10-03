const Patient = require('../../../models/patientModel');

exports.register = async (req, res) => {
    const doctorId = req.user._id; 

    try {
        const { name, phone } = req.body;
        let patient = await Patient.findOne({ phone });

        if (patient) {
            return res.status(200).json({
                success: true,
                patient
            });
        }

        patient = await Patient.create({ name, phone, doctor: doctorId });

        return res.status(201).json({
            success: true,
            patient,
            msg: 'Patient registered successfully!'
        });
    } catch (err) {
        return res.status(500).json({
            success: false,
            msg: 'Error occurred while registering patient'
        });
    }
  };

  