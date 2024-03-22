const { User } = require('../model/User');
const jwt = require('jsonwebtoken');
const bcrypt =  require('bcrypt');

exports.createUser = async (req, res) =>
{
  const { email } = req.body
  if (!email) return res.status(422).send({ message: "Missing email." });
  try {
      const existingUser = await User.findOne({ email }).exec();
      if (existingUser) return res.status(409).send({ message: "Email is already in use."})

      const salt = bcrypt.genSaltSync(10);
      const hashedPassword = bcrypt.hashSync(req.body.password, salt);
      const newUser = new User({ ...req.body, password: hashedPassword });

      newUser.save().then((user) =>
      {
        const payload = {
          id:user._id,
          name:user.name,
          email:user.email,
          role:user.role,
          state:user.state,
          dist:user.dist,
        }
          const token = jwt.sign(payload, process.env.JWT_SECRET_KEY, { expiresIn: "9999 years" });
          console.log("I am here");
          return res
            .cookie("access_token", token, {
              httpOnly: true,
              secure: true
            })
            .status(200)
            .json({ message: "User Created successfully 😊 👌" });
      }).catch((err) => {
          console.log(err);
          res.status(401).send(err);
      });
  } catch (err) {
      console.log(err);
      res.status(401).send(err);
  }
};

exports.loginUser = async (req, res) => {
  try
  {
      console.log(req.body);
      const user = await User.findOne({ email: req.body.email });
      console.log("user",user);
      if (!user)  return res.status(401).send("User not found");
      const validPassword = await bcrypt.compareSync(req.body.password, user.password);
      console.log("I am here");
      if (!validPassword) res.status(401).send("Wrong password");
      // create jwt token
      const payload = {
        id:user._id,
        name:user.name,
        email:user.email,
        role:user.role,
        state:user.state,
        dist:user.dist,
      }
      const token = jwt.sign(payload, process.env.JWT_SECRET_KEY, { expiresIn: "9999 years" });
      res
       .cookie("access_token", token, {
        httpOnly: true,
        secure: true
      })
      .status(200)
      .json({ message: "User loged in successfully 😊 👌" });

  } catch (err) {
       console.log(err);
      res.status(401).json({"error":err});
  }
};

exports.checkAuth = async (req,res) =>
{
  if(req.body.user) res.status(200).json(req.body.user);
  else res.status(400).json(null);
}

exports.logout = async (req, res) => {
  res
    .clearCookie('access_token')
    .status(200)
    .json({ message: "Logged Out Successfully" })
};




