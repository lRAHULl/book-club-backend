const express = require('express');
const indexRoutes = require('./routes/main')
const authRoutes = require('./routes/auth')

const app = express();
const PORT = process.env.PORT || 8080;

app.use('/', indexRoutes)
app.use('/auth', authRoutes)

app.listen(PORT, () => {
  console.log(`Server started at port: ${PORT}`);
});
