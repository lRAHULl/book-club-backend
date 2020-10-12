const express = require("express"),
  router = express.Router(),
  User = require("../models/user");

router.get('/', (req, res) => {
  User.find({}, (err, users) => {
    if (err) {
      res.send(500);
    } else {
      res.json(users);
    }
  })
});

router.post('/register', (req, res) => {
  console.log(req.body);
  firstName = req.body.firstName,
  lastName = req.body.lastName,
  username = req.body.username,
  password = req.body.password,

  User.create({
    firstName,
    lastName,
    username,
    password,
  }, (err, user) => {
    if (err) {
      console.log('err', err.message);
      res.status.send('server error')
    } else {
      console.log('success', user);
      res.status(200).send('success');
    }
  })
});

module.exports = router;
