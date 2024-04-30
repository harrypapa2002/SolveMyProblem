//issueRoutes.js

const express = require('express');
const router = express.Router();
const issueController = require('../controllers/runProblemController');
const originAuth = require('../middlewares/originMiddleware');
const auth = require('../middlewares/authMiddleware');


router.post('/run', issueController.runProblem);

module.exports = router;
