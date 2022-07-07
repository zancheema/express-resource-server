const User = require('../db/model/User');
const JwtStrategy = require('passport-jwt').Strategy,
    ExtractJwt = require('passport-jwt').ExtractJwt;
const opts = {}
opts.jwtFromRequest = ExtractJwt.fromAuthHeaderAsBearerToken();
opts.secretOrKey = process.env.SECRET;

module.exports = new JwtStrategy(opts, async (jwt_payload, done) => {
    try {
        const user = await User.findOne({ id: jwt_payload.sub });
        if (user)   return done(null, user);
        else        return done(null, false);
    } catch (err) {
        return done(err, false);
    }
});