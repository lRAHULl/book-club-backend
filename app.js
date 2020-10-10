const express = require('express');
const indexRoutes = require('./routes/main')

const app = express();
const PORT = process.env.PORT || 8080;

app.use('/', indexRoutes)

app.listen(PORT, () => {
  console.log(`Server started at port: ${PORT}`);
});
