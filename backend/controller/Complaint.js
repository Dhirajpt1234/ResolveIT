
const { Issue } = require('../model/Issue');

exports.createComplaint = async (req, res) =>
{
  const complaint = new Issue(req.body);
  try
  {
    const doc = await complaint.save();
    res.status(201).json(doc);
  }
  catch (err)
  {
    res.status(400).json(err);
  }
};



exports.getComplaint= async (req, res) =>
{
  const { id } = req.params;
  let condition = {};
  let query = Issue.find(condition);
  if (req.query.userid)
  {
    query = query.find({ userid : id});
  }
  try
  {
    const docs = await query.exec();
    res.status(200).json(docs);
  } catch (err) {
    res.status(400).json(err);
  }
};


