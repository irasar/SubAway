const router = require("express").Router();
const subscriptionsController = require("../../controllers/subscriptionController");

// Matches with "/api/user/:id"
router.route("/:id")
  .get(subscriptionsController.findUser)
  .post(subscriptionsController.createUser);

  
module.exports = router;