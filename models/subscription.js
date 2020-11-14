const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const subscriptionSchema = new Schema({
    title: {
        type: String,
        required: true
    },
    type: {
        type: String,
        required: true
    },
    amount: {
        type: Number,
        required: true
    },
    dueDate: {
        type: Date,
        required: true
    },
    userID: {
        type: String,
        required: true
    }
})

const Subscription = mongoose.model("Subscription", subscriptionSchema);

module.exports = Subscription