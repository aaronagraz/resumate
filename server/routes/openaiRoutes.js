const express = require("express");
const { generateText } = require("../controllers/openaiController");
const router = express.Router();

router.post("/generateText", generateText);

module.exports = router;

// router.post("/generateText", (req, res) => {
//   res.status(200).json({
//     success: true,
//   });
// });
