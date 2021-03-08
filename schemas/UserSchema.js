const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const UserSchema = new Schema({
    fullName: { type: String, required: true },
    email: { type: String, required: true, unique: true },
    mobile: { type: Number, required: true,unique:true },
    location: { type: String, required: true, unique: true },
    password: { type: String, required: true },
    conpassword:{ type: String, required: true },
    //  profilePic: { type: String, default: "/images/profilePic.png" },
}, { timestamps: true });

var User = mongoose.model('User', UserSchema);
module.exports = User;