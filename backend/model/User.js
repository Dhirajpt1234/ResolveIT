const mongoose = require('mongoose');
const { Schema } = mongoose;

const userSchema = new Schema({
  name: { type: String, required: true},
  email: { type: String, required: true, unique: true },
  password: { type: String, required: true },
  role: { type: String, required: true, default:'user' },
  state: {type: String, required: true},
  district: {type: String, required: true},
},{timestamps: true});

exports.User = mongoose.model('User', userSchema);