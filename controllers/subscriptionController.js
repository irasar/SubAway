const db = require("../models");

module.exports = {
    findAllSubs: function (req, res) {
        db.Subscription.find( { userID: req.params.id } )
            .then(subscriptions => res.json(subscriptions))
            .catch(err => res.status(422).json(err));
    },
    findOneSub: function (req, res) {
        db.Subscription.findById(req.params.id)
            .then(subscriptions => res.json(subscriptions))
            .catch(err => res.status(422).json(err));
    },
    createSub: function (req, res) {
        console.log(req.body);
        db.Subscription.create(req.body)
            .then(subscriptions => res.json(subscriptions))
            .catch(err => res.status(422).json(err));
    },
    updateSub: function (req, res) {
        db.Subscription.findOneAndUpdate({ _id: req.params.id }, req.body)
            .then(subscriptions => res.json(subscriptions))
            .catch(err => res.status(422).json(err));
    },
    removeSub: function (req, res) {
        db.Subscription.findById({ _id: req.params.id })
            .then(subscriptions => subscriptions.remove())
            .then(subscriptions => res.json(subscriptions))
            .catch(err => res.status(422).json(err));
    },
    findUser: function (req, res) {
        console.log("finding user");
        db.User.findOne({ auth0ID: req.params.id })
            .then(user => {
                res.json(user)
            })
            .catch(err => res.status(422).json(err));
    },
    createUser: function (req, res) {
        console.log("creating user");
        db.User.create(req.body)
            .then(user => res.json(user))
            .catch(err => res.status(422).json(err));
    },
    updateBudget: function (req, res) {
        console.log("updated user");
        db.User.findOneAndUpdate({auth0ID: req.body.auth0ID}, {budget: req.body.budget})
            .then(user => res.json(user))
            .catch(err => res.status(422).json(err));
    }
}