const express = require('express');
const router = express.Router();
const addUser = require('./services/addUser');
const login = require('./services/tokens');
const createProject = require('./services/createProject');
const createUs=require('./services/createUs');
const createTask=require('./services/task');
const project = require('./services/project');
const deleteUs = require('./services/deleteUs');

router.use('/', addUser);
router.use('/', login);
router.use('/', createProject);
router.use('/', createUs);
router.use('/', createTask);
router.use('/', project);
router.use('/', deleteUs);



module.exports = router;
