const mongoose = require("mongoose");

const { MONGO_URI } = process.env || 'mongodb://mongo:27017/AuthTest' ;

exports.connect = () => {
  mongoose.connect(MONGO_URI, 
    {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    })
    .then(() => {
      console.log("Successfully connected to database");
    })
    .catch((error) => {
      console.log("database connection failed. exiting now...");
      console.error(error);
      process.exit(1);
    });
};
