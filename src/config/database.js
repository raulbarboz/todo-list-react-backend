const mongoose = require('mongoose');
mongoose.Promise = global.Promise;
const databaseURL = process.env.MONGODB_URI || 'mongodb://localhost:27017/todo';

module.exports = mongoose.connect(databaseURL, { useMongoClient: true })
