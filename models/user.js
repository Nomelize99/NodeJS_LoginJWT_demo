const mongoose = require('mongoose');
const validator = require('validator');
const userSchema = new mongoose.Schema({
    firstname: {
        type: String,
        required: true 
    },
    lastname: {
        type: String,
        required: true 
    },
    username:{
        type: String,
        required: true,
        unique:  true 
    },
    password:{
        type: String
    },
    email:{
        type: String,
        required: true ,
        unique:true,
        lowercase:true
    },
    token:{
        type : String
    }
});
//mongoose hook
/*
userSchema.pre('save', async function (next) {
    const salt = await bcrypt.genSalt();
    this.password = await bcrypt.hash(this.password, salt);
    next();
});*/

const User = mongoose.model('user',userSchema);

module.exports = User;