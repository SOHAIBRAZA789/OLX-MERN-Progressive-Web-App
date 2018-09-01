const LocalStrategy = require('passport-local').Strategy;
const {User} = require('../db/models/userModel');



const LocalStr = new LocalStrategy(
    {
        usernameField: 'username' // not necessary, DEFAULT
    },
    (username, password, done) => {
        // Match user
        User.findOne({
            'username': username
        })
        .then(user => {
            if (!user) {
                    return done(null, false, { message: 'No User Found' });
                }
            if (!user.checkPassword(password)) {
                    return done(null, false, { message: 'Incorrect password' })
                }
            return done(null, user)

                // Match password
            //     bcrypt.compare(password, user.password, (err, isMatch) => {
            //         if (err) throw err;
            //         if (isMatch) {
            //             return done(null, user);
            //         } else {
            //             return done(null, false, { message: 'Password Incorrect' });
            //         }
            // })
        })
    }
);

module.exports = {LocalStr}