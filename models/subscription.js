import Mongoose from "mongoose";
const Schema = mongoose.Schema;

const subscriptionSchema = new Schema({
    title: {
        type: String,
        required: true
    },
    amount: {
        type: String,
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

export default Subscription;