const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const bcrypt = require('bcrypt')
mongoose.promise = Promise

//** USER MODEL **//
// ** MODEL is like a TABEL and User is table name**//

// Create Schema
const userSchema = new Schema({
    username: { type: String, unique: false },
    email: { type: String, unique: false },
    password: { type: String, unique: false, required: false }
       
});


// Define schema methods
userSchema.methods = {
    checkPassword: function (inputPassword) {
        return bcrypt.compareSync(inputPassword, this.password)
    },
    hashPassword: plainTextPassword => {
        return bcrypt.hashSync(plainTextPassword, 10)
    }
};

// Define hooks for pre-saving
userSchema.pre('save', function (next) {
    if (!this.password) {
        console.log('=======NO PASSWORD PROVIDED=======')
        next()
    } else {
        this.password = this.hashPassword(this.password)
        next()
    }
});

var User = mongoose.model('User', userSchema);

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
