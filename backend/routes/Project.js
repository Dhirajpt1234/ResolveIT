

const express = require('express');
const { createProject, fetchAllProject,fetchProjectById, updateProject } = require('../controller/Project');

const router = express.Router();

router.post('/createProject',createProject)
      .get('/fetchprojects',fetchAllProject)
      .get('/:id', fetchProjectById)
      .patch('/:id', updateProject)

exports.router =router;

