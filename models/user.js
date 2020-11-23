const mongoose = require("mongoose");
const Schema = mongoose.Schema;
// user schema
const userSchema = new Schema({
    auth0ID: {
        type: String,
        required: false
    },
    budget: {
        type: String,
        required: false
    }
});

const User = mongoose.model("User", userSchema);

module.exports = User;