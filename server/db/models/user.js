const mongoose = require('mongoose');
const Schema = mongoose.Schema;

//** USER MODEL **//
// ** MODEL is like a TABEL and User is table name**//

// Create Schema
const userSchema = new Schema({
    firstName: { type: String, unique: false },
    lastName: { type: String, unique: false },
    local: {
        username: { type: String, unique: false, required: false },
        password: { type: String, unique: false, required: false }
    },
});

var User = mongoose.model('User', UserSchema);

// var newUser = new User({
//     name: 'Sohaib Raza',
//     email: ' Sohaibraza@gmail.com ',
//     password: '1234'
// });

// newUser.save().then((doc) => {
//     console.log('Save Data', doc);
// }, (e) => {
//     console.log('Unable to Save data');
// });

module.exports = { User };
