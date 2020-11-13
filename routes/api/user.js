const router = require("express").Router();
const subscriptionsController = require("../../controllers/subscriptionController");

// Matches with "/api/subscriptions"
router.route("/")
  .get(subscriptionsController.findUser)
  .post(subscriptionsController.createUser);

  
module.exports = router;