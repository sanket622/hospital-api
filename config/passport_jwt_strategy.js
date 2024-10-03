const passport = require('passport');
const JWTStrategy = require('passport-jwt').Strategy;
const ExtractJWT = require('passport-jwt').ExtractJwt;
const Doctor = require('../models/doctorModel');

const opts = {
    jwtFromRequest: ExtractJWT.fromAuthHeaderAsBearerToken(),
    secretOrKey: process.env.SECRETHOSPITALKEY 
};

passport.use(new JWTStrategy(opts, async (jwtPayload, done) => {
    try {
        const user = await Doctor.findById(jwtPayload.id);
        if (user) {
            return done(null, user);
        }
        return done(null, false);
    } catch (err) {
        console.error('Error finding user from JWT:', err);
        return done(err, false);
    }
}));

module.exports = passport;
