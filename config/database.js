const mongoose = require("mongoose");
<<<<<<< HEAD
const  MONGO_URI  = process.env.MONGO_URI ;
=======

const { MONGO_URI } = process.env || 'mongodb://mongo:27017/AuthTest' ;
>>>>>>> 53ca0e210e1884dc46ad67303aacbe60b94e6d47

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
