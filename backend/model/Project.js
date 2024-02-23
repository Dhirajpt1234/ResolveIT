const mongoose = require('mongoose');
const { Schema } = mongoose;

const projectSchema = new Schema(
{
  title: { type: String, required: true},
  desc: { type: String, required: true, unique: true},
  state: {type: String, required: true},
  district: {type: String, required: true},
  status:{ type:String, default:"Pending"},
  images : {type:[String]},
  pdfs:{type:[String]}
},{timestamps: true});

exports.Project = mongoose.model('Project', projectSchema);