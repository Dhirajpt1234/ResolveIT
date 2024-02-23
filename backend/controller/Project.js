const { Project } = require('../model/Project');

exports.createProject = async (req, res) =>
{
  const project = new Project(req.body);
  try
  {
    const doc = await project.save();
    res.status(201).json(doc);
  } catch (err) {
    res.status(400).json(err);
  }
};

exports.fetchAllProject= async (req, res) =>
{
  let condition = {};
  let query = Project.find(condition);
  let totalProjectQuery = Project.find(condition);

  if (req.query.state) {
    query = query.find({ state : req.query.state});
    totalProjectQuery = totalProjectQuery.find({state : req.query.state});
  }
  if (req.query.dist) {
    query = query.find({ dist: req.query.dist });
    totalProjectQuery = totalProjectQuery.find({ dist: req.query.dist });
  }
  const totalDocs = await totalProjectQuery.count().exec();
  if (req.query.page && req.query.limit)
  {
    const pageSize = req.query.limit;
    const page = req.query.page;
    query = query.skip(pageSize * (page - 1)).limit(pageSize);
  }

  try {
    const docs = await query.exec();
    res.set('X-Total-Count', totalDocs);
    res.status(200).json(docs);
  } catch (err) {
    res.status(400).json(err);
  }
};

exports.fetchProjectById = async (req, res) =>
{
  const { id } = req.params;
  try {
    const project = await Project.findById(id);
    res.status(200).json(project);
  } catch (err) {
    res.status(400).json(err);
  }
};

exports.updateProject = async (req, res) =>
{
  const { id } = req.params;
  try {
    const project = await Project.findByIdAndUpdate(id, req.body, {new:true});
    res.status(200).json(project);
  } catch (err) {
    res.status(400).json(err);
  }
};