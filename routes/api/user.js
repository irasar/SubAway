const router = require("express").Router();
const subscriptionsController = require("../../controllers/subscriptionController");

// Matches with "/api/user"
router.route("/")
  .post(subscriptionsController.createUser)
  .put(subscriptionsController.updateBudget);
// Matches with "/api/user/:id"
router.route("/:id")
  .get(subscriptionsController.findUser)

module.exports = router;