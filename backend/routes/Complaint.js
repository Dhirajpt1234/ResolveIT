const express = require('express');
const passport = require('passport');
const { createComplaint,getComplaint } = require("../controller/Complaint");

const router = express.Router();
router.post('/createComplaint',createComplaint)
      .get('/getComplaint/:id',getComplaint);
exports.router = router;