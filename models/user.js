

const mongoose = require('mongoose');


var User = mongoose.model('User' , {


        nom: String,
        prenom: String,
        age: Number
} );



module.exports = {User};