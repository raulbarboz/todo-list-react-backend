const mongoose = require('mongoose');
mongoose.Promise = global.Promise;
const databaseURL = process.env.MONGODB_URI;

module.exports = mongoose.connect(databaseURL, { useMongoClient: true })
