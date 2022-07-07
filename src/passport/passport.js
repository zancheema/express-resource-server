const passport = require("passport");
const jwtStrategy = require('./jwtStrategy');

passport.use(jwtStrategy);

module.exports = passport;