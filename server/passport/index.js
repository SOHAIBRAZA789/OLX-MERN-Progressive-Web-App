// const passport = require('passport')
// const {LocalStr} = require('./localStrategy')
// const {User} = require('../db/models/userModel');

// passport.serializeUser((user, done) => {
// 	console.log('=== serialize ... called ===')
// 	console.log(user) // the whole raw user object!
// 	console.log('---------')
// 	done(null, { _id: user._id })
// })

// passport.deserializeUser((id, done) => {
// 	console.log('DEserialize ... called')
// 	User.findOne(
// 		{ _id: id },
// 		'firstName lastName photos local.username',
// 		(err, user) => {
// 			console.log('======= DESERILAIZE USER CALLED ======')
// 			console.log(user)
// 			console.log('--------------')
// 			done(null, user)
// 		}
// 	)
// })

// // ==== Register Strategies ====
// passport.use(LocalStr)


// module.exports = passport


var passport = require("passport");
var LocalStrategy = require("passport-local").Strategy;

const {User} = require('../db/models/userModel');

    
module.exports = function() {

   
passport.use(new LocalStrategy({usernameField:'email'},
function (email, password, done) {
  
    User.findOne({ email: email }, function (err, user) {
        if (err) { return done(err); }
        if (!user) {
            return done(null, false, { message: 'Incorrect username.' });
        }
        if (user.password !=password){
            return done(null, false, { message: 'Incorrect password.' });
        }
        return done(null, user);
    });
}
));

passport.serializeUser(function (user, done) {
   done(null, user._id);
});

passport.deserializeUser(function (id, done) {

	User.findById(id, function (err, user) {
    done(err, user);
});
});


};
 
