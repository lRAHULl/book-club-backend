const express = require('express');

const router = express.Router()

router.get("/", (req, res) => {
  res.json({
    "name": "rahul",
    "id": 1
  })
});

module.exports = router;
