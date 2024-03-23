const jwt = require("jsonwebtoken")

exports.verifyToken = async (req, res, next) => {
  try
  {
    // console.log("cookies : ",req.cookies);
    if (req.cookies.access_token===undefined)
    {
        console.log("I am in if")
        return res.status(400).json("Unautherised");
    }
    const token = req.cookies.access_token;
    console.log(token);
    // Check if token exists
    if (!token)  return res.status(200).send("Unautherised");
    const decode = await jwt.verify(token, process.env.JWT_SECRET_KEY);
    req.body.user = decode;
    console.log("in verify token")
    next();
  } catch (err) {
    console.log(err)
    res.status(400).json(err)
  }
};