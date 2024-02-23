const { User } = require('../Model/User');
const jwt = require('jsonwebtoken');

exports.createUser = async (req, res) => {
  try {
      const user = new User(req.body);
      console.log("I am in register")
        const doc = await user.save();
        res.status(201).json(doc);
        // req.login(sanitizeUser(doc), (err) =>
        // {
        //   // this also calls serializer and adds to session
        //   if (err) res.status(400).json(err);
        //   else
        //   {
        //     const token = jwt.sign({id:doc.id,role:user.role},process.env.JWT_SECRET_KEY);
        //     res
        //       .cookie('jwt', token, {
        //         expires: new Date(Date.now() + 3600000),
        //         httpOnly: true,
        //       })
        //       .status(201)
        //       .json({ id: doc.id, role: doc.role });
        //   }
        // });
      }
   catch (err) {
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


exports.checkAuth = async (req, res) => {
  if (req.user) {
    res.json(req.user);
  } else {
    res.sendStatus(401);
  }
};