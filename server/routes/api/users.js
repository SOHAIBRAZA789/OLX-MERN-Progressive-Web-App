const express = require('express');
const router = express.Router();
const passport = require('passport');
var LocalStrategy = require("passport-local").Strategy;
const {User} = require('../../db/models/userModel');
// const passport = require('../../passport/index');





   
	passport.use(new LocalStrategy({usernameField:'username'},
	
	function (username, password, done) {
	  
		User.findOne({ email: username }, function (err, user) {
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
	
	
	











// this route is just used to get the user basic info
router.get('/user', (req, res, next) => {
	console.log('===== user!!======')
	console.log(req.user)
	if (req.user) {
		return res.json({ user: req.user })
	} else {
		return res.json({ user: null })
	}
})

// Login Form POST
// router.post(
// 	'/login',
// 	(req, res, next)=> {
// 		console.log(req.body)
// 		console.log('================')
// 		next()
// 	},
// 	passport.authenticate('local'),
// 	(req, res) => {
// 		console.log('POST to /login',req.body)
// 		const user = JSON.parse(JSON.stringify(req.username)) // hack
// 		const cleanUser = Object.assign({}, user)
// 		if (cleanUser.local) {
// 			console.log(`Deleting ${cleanUser.password}`)
// 			delete cleanUser.password
// 		}
// 		res.json({ user: cleanUser })
// 	}
// )
router.post('/login', (req, res, next) => {
	console.log(req.body);
	console.log('===== user!!======')
	passport.authenticate('local', {
	  successRedirect:'/',
	  failureRedirect: '/login'
	  
	})(req, res, next);
	//  res.send('Login');
  });



// SignUp Form POST
router.post('/signup', (req, res) => {
	console.log(req.body);
	const { username, password,email } = req.body
	// ADD VALIDATION
	User.findOne({ 'username': username }, (err, userMatch) => {
		if (userMatch) {
			return res.json({
				error: `Sorry, already a user with the username: ${username}`
			})
		}
		const newUser = new User({
			'username': username,
			'password': password,
			'email':email
		})
		newUser.save((err, savedUser) => {
			if (err) return res.json(err)
			return res.json(savedUser)
		})
	})
});


// Logout User
router.post('/logout', (req, res) => {
	if (req.user) {
		req.session.destroy()
		res.clearCookie('connect.sid') // clean up!
		return res.json({ msg: 'logging you out' })
	} else {
		return res.json({ msg: 'no user to log out!' })
	}
});

module.exports = router
