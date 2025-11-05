const mongoose = require("mongoose");

//Schema
const userSchema = new mongoose.Schema({
    firstName: {
        required: true,
        type: String,
    },
    lastName: {
        type: String,
    },
    email: {
        type: String,
        required: true,
        unique: true,
    },
    jobTitle: {
        type: String,
    },
    gender: {
        type: String,
    },
}, { timestamps: true }
);

//model
const User = mongoose.model("user", userSchema);
module.exports = User;
