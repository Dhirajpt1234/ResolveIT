const express = require("express");
const passport = require("passport");
const { createUser, loginUser, logout } = require("../controller/Auth");

const router = express.Router();
router
  .post("/register", createUser)
  .post("/login", passport.authenticate("local"), loginUser)
  .get("/logout", logout);

exports.router = router;
