const express = require('express');
const router = express.Router();
const addUser = require('./services/addUser');
const login = require('./services/tokens');
const createProject = require('./services/createProject');
const projectsList = require('./services/projectsList');

router.use('/', addUser);
router.use('/', login);
router.use('/', createProject);
router.use('/', projectsList);

module.exports = router;
