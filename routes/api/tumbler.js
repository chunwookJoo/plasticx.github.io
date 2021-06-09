const express = require("express");
const path = require("path");
const controllerPath = path.resolve(__dirname, "..", "..", "controller");

const tumblerInsert = require(path.resolve(
  controllerPath,
  "tumbler",
  "TumblerInsert"
));

const tumblerSelect = require(path.resolve(
  controllerPath,
  "tumbler",
  "TumblerSelect"
));

const tumblerUpdate = require(path.resolve(
  controllerPath,
  "tumbler",
  "TumblerUpdate"
));

const router = express.Router();

// /api/tumbler

router.post("/", tumblerInsert);
router.get("/:_id", tumblerSelect);
router.put("/:_id", tumblerUpdate);
// router.delete("/:_id", tumblerDelete);

module.exports = router;