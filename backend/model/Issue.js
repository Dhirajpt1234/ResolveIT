const mongoose = require('mongoose');
const { Schema } = mongoose;

const issueSchema = new Schema(
{
  userid : {type : Schema.Types.ObjectId, ref: 'User'},
  title: { type: String, },
  desc: { type: String},
  state: {type: String},
  district: {type: String},
  status:{ type:String, default:"Pending"},
  images : {type:[String]}
},{timestamps: true});

exports.Issue = mongoose.model('Issue', issueSchema);