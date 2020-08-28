


const mongoose = require('mongoose');

mongoose.Promise = global.Promise;

mongoose.connect('mongodb://127.0.0.1:27017/user' || process.env.MONGODB_URI );



module.exports = {mongoose};
