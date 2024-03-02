require('dotenv').config();
const mongoose = require('mongoose');
const express = require('express');
const cookieParser = require('cookie-parser');

const cors = require('cors');
const path = require('path');
const authRouter = require('./routes/Auth');
const projectRouter = require('./routes/Project');
const complaintRouter = require('./routes/Complaint');

const passport = require('passport');
const session = require('express-session');

const jwt = require('jsonwebtoken');
const JwtStrategy = require('passport-jwt').Strategy;
const LocalStrategy = require('passport-local').Strategy;
const {uploadImg} = require('./controller/uploadImg');
const {uploadPdf} = require('./controller/uploadPdf');
const {User} = require('./model/User')

const server = express();

server.use(cors());

server.use(cookieParser());

server.use(
  session({
    secret: process.env.SESSION_KEY,
    resave: false, // don't save session if unmodified
    saveUninitialized: false, // don't create session until something stored
  })
);

server.use(passport.authenticate('session'));


server.post('/uploadImg',uploadImg.array('photos'),(req,res,)=>{res.send("File Uploaded")});
server.post('/uploadPdf',uploadPdf.array('pdfs'),(req,res,)=>{res.send("File Uploaded")});
server.use(express.json());

server.use('/auth',authRouter.router);
server.use('/project',projectRouter.router);
server.use('/complaint',complaintRouter.router);

server.use(express.static('public'));
server.use(express.static('Images'));
server.use(express.static('Pdfs'));


passport.use(
  'local',
  new LocalStrategy(
    {usernameField:'email'},
    async function (email, password, done) {
    // by default passport uses username
    try {
      const user = await User.findOne({ email: email });
      if (!user) {
        return done(null, false, { message: 'invalid credentials' }); // for safety
      }
      if (user.password!=password) {
        return done(null, false, { message: 'invalid credentials' });
      }
      const token = jwt.sign({ id: user.id, role: user.role },process.env.JWT_SECRET_KEY);
      done(null, {user}); // this lines sends to serializer

    } catch (err) {
      done(err);
    }
  })
);

passport.serializeUser(function (user, cb) {
  process.nextTick(function () {
    return cb(null, { id: user.id, role: user.role });
  });
});

passport.deserializeUser(function (user, cb) {
  process.nextTick(function () {
    return cb(null, user);
  });
});




main().catch((err) => console.log(err));

async function main() {
  await mongoose.connect(process.env.MONGODB_URL);
  console.log('database connected');
}

server.listen(process.env.PORT, () => {
  console.log('server started');
});