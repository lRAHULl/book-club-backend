const express = require('express');

const app = express();
const PORT = process.env.PORT || 8080;

app.get("/", (req, res) => {
  res.json({
    "name": "rahul",
    "id": 1
  })
});

app.listen(PORT);