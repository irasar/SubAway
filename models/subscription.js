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
        type: String,
        required: true
    },
    startDate: {
        type: String,
        required: false
    },
    dueDate: {
        type: String,
        required: false
    },
    userID: {
        type: String,
        required: false
    }
})

const Subscription = mongoose.model("Subscription", subscriptionSchema);

module.exports = Subscription