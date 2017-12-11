const express = require('express');
const router = express.Router();
const addUser = require('./services/addUser');
const login = require('./services/tokens');
const createProject = require('./services/createProject');

router.use('/', addUser);
router.use('/', login);
router.use('/createProject', createProject);

module.exports = router;
