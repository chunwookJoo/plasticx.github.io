const express = require("express");
const router = express.Router();
const user = require("./api/user");
const admin = require("./api/admin");

router.use("/user", user);
router.use("/admin", admin);

module.exports = router;
