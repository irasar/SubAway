const router = require("express").Router();
const subscriptionsController = require("../../controllers/subscriptionController");

// Matches with "/api/subscriptions"
router.route("/")
  .get(subscriptionsController.findAllSubs)
  .post(subscriptionsController.createSub);

// Matches with "/api/subscriptions/:id"
router
  .route("/:id")
  .get(subscriptionsController.findOneSub)
  .put(subscriptionsController.updateSub)
  .delete(subscriptionsController.removeSub);

module.exports = router;
