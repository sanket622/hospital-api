const Doctor = require('../../../models/doctorModel');
const jwt = require('jsonwebtoken');

exports.register = async (req, res) => {
    try {
        const doctor = await Doctor.create(req.body);
        return res.status(201).json({
            success: true,
            doctor
        });
    } catch (err) {
        return res.status(500).json({
            success: false,
            message: err.message
        });
    }
};

exports.login = async (req, res) => {
    try {
        const { email, password } = req.body;

        if (!email || !password) {
            return res.status(400).json({
                success: false,
                msg: 'Email and password are required'
            });
        }

        const doctor = await Doctor.findOne({ email });
        if (!doctor || !(await doctor.matchPassword(password))) {
            return res.status(401).json({
                success: false,
                msg: "Invalid email or password"
            });
        }

        const token = jwt.sign({ id: doctor._id }, process.env.SECRETHOSPITALKEY, { expiresIn: '1h' }); 

        return res.status(200).json({
            success: true,
            token,
            msg: `Login successful! Welcome, ${doctor.username}`
        });
    } catch (error) {
        console.error(error);
        res.status(500).json({
            success: false,
            msg: 'Server error'
        });
    }
};
