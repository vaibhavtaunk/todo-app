const mongoose = require('mongoose');
const config = require('./default');

const connectDB = async () => {
  try {
    await mongoose.connect(config.db.uri, config.db.options);
    console.log('Connected to MongoDB');
  } catch (err) {
    console.error('Failed to connect to MongoDB', err);
  }
};

module.exports = connectDB;
