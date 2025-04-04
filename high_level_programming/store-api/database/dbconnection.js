const mongoose = require('mongoose');

const databaseConnection = async () => {
  try {
    await mongoose.connect(process.env.MONGODB_URL);
    console.log('Connected to database successfully');
  } catch (error) {
    console.error(error.message);
  }
};

module.exports = databaseConnection;
