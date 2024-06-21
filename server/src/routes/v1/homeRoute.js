const express = require("express");

const router = express.Router();

router.route("/").get((req, res) => {
  res.json({ success: true, message: "Home Route" });
});

module.exports = router;
