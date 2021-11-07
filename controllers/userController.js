const User = require("../models/user");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");

module.exports.signup = async (req, res) => {
    const { firstname, lastname, username , password , email } = req.body;
    try {
      const olduser = await User.findOne({email});
      if(olduser){
        return res.status(409).send('U already got user. please login');
      }
      encrpytpassword = await bcrypt.hash(password , 10);
      const user = await User.create({ firstname, lastname , username ,password:encrpytpassword , email });
      const token = jwt.sign({email},process.env.TOKEN_KEY , {expiresIn : "1h"});
      user.token = token;
      res.status(201).json(user);

    }
    catch(err) {
      res.status(400).send('cannot created');
      console.log(err);
    }
}
module.exports.login = async (req, res) => {
    try{
      const { username , password } = req.body;

      if(!(username && password)){
        res.status(400).send("all input is required");
      }
      const user = await User.findOne({username});
      if(user && (await bcrypt.compare(password, user.password))){
        const token = jwt.sign({username},process.env.TOKEN_KEY , {expiresIn : "1h"});
        user.token = token;
        res.status(200).json(user);
      }
      res.status(400).send("invalid Credentials")
    }
    catch(err){
      console.log(err);
    }
}

//getfortest
module.exports.getalluser = async (req, res) => {
    const user = await User.find({});
    res.json(user);
}

module.exports.logout = (req ,res) => {
    const token =  req.body.token || req.query.token || req.headers["x-access-token"];
    jwt.sign(token, "", { expiresIn: 1 } , (logout, err) => {
      if (logout) {
      res.send('You already log out ');
      } 
      else {
      res.send('Error');
      }
    })
}