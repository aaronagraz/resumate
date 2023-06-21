const express = require("express");
const { generateText } = require("../controllers/openaiController");
const router = express.Router();

router.post("/generateText", (req, res) => {
  res.status(200).json({
    success: true,
  });
});

module.exports = router;
