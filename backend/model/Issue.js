const mongoose = require('mongoose');
const { Schema } = mongoose;

const issueSchema = new Schema(
{
  pro_id : {type : Schema.Types.ObjectId, ref: 'Project', required:true },
  title: { type: String, required: true},
  desc: { type: String, required: true, unique: true},
  state: {type: String, required: true},
  district: {type: String, required: true},
  status:{ type:String, default:"Pending"},
  images : {type:[String]}
},{timestamps: true});

exports.Issue = mongoose.model('Issue', issueSchema);