const router = require("express").Router();
const Api = require("./users");

// Book routes
router.use("/users", Api);

module.exports = router;
