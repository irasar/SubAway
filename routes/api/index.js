const router = require("express").Router();
const subscriptionsRoutes = require("./subscription");
const path = require("path");
const userRoutes = require("./user");

// Subscription routes
router.use("/subscriptions", subscriptionsRoutes);
// User routes
router.use("/user", userRoutes);
// If no API routes are hit, send the React app
router.use(function (req, res) {
    res.sendFile(path.join(__dirname, "../../client/public/index.html"))
});

module.exports = router;
