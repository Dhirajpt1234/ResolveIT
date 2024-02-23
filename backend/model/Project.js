const mongoose = require('mongoose');
const { Schema } = mongoose;

const projectSchema = new Schema(
{
  title: { type: String,},
  desc: { type: String},
  state: {type: String},
  district: {type: String},
  status:{ type:String, default:"Pending"},
  images : {type:[String]},
  pdfs:{type:[String]}
},{timestamps: true});

exports.Project = mongoose.model('Project', projectSchema);