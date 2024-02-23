const { User } = require('../model/User');
const jwt = require('jsonwebtoken');

exports.createUser = async (req, res) =>
{
  try {
      const user = new User(req.body);
      console.log(req.body);
      const doc = await user.save();
      console.log(console.log(doc))
      res.status(201).json(doc);
      }
   catch (err) {
    console.log(err);
    res.status(400).json(err);
  }
};

exports.loginUser = async (req, res) => {
  const user = req.user;
  res
    .cookie('jwt', user.token, {
      expires: new Date(Date.now() + 3600000),
      httpOnly: true,
    })
    .status(201)
    .json(user);
};

exports.logout = async (req, res) => {
  res
    .cookie('jwt', null, {
      expires: new Date(Date.now()),
      httpOnly: true,
    })
    .sendStatus(200)
};


