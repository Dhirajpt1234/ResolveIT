const express = require("express");
const passport = require("passport");
const { createUser, loginUser, logout,checkAuth } = require("../controller/Auth");
const { verifyToken } =  require("../middlewares/verifyToken");

const router = express.Router();

router
  .post("/register", createUser)
  .post("/login", loginUser)
  .get("/checkAuth",verifyToken,checkAuth)
  .get("/logout",verifyToken,logout);


exports.router = router;
