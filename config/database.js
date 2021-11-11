const mongoose = require("mongoose");
const  MONGO_URI  = process.env.MONGO_URI ;

exports.connect = () => {
  mongoose.connect(MONGO_URI, 
    {
      useNewUrlParser: true,
      useUnifiedTopology: true
    })
    .then(() => {
      console.log(`Successfully connected to database ${MONGO_URI}`);
    })
    .catch((error) => {
      console.log(`database connection failed. exiting now... ${MONGO_URI}`);
      console.error(error);
      process.exit(1);
    });
};