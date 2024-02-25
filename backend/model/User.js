const mongoose = require('mongoose');
const { Schema } = mongoose;

const userSchema = new Schema({
  name: { type: String},
  email: { type: String},
  password: { type: String },
  role: { type: String,  default:'user' },
  state: {type: String},
  dist: {type: String},
},{timestamps: true});

exports.User = mongoose.model('User', userSchema);