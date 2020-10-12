const express = require('express');
const bodyParser    = require('body-parser'),
      mongoose      = require('mongoose');
const indexRoutes = require('./routes/main'),
      authRoutes = require('./routes/auth'),
      userRoutes = require('./routes/user')

const app = express();
const PORT = process.env.PORT || 8080;

const url = process.env.DB_URL;

mongoose.connect(url, {
  useNewUrlParser: true
}).then(() => {
  console.log("Database Connected :)");
}).catch((err) => {
  console.log("Database connection Failed :(", err.message);
});

bodyParser.raw()
app.use(bodyParser.urlencoded({extended: true}));
app.use('/', indexRoutes)
app.use('/user', userRoutes)

app.listen(PORT, () => {
  console.log(`Server started at port: ${PORT}`);
});
