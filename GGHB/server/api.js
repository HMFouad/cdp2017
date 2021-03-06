const express = require('express');
const router = express.Router();
const addUser = require('./services/addUser');
const login = require('./services/tokens');
const createProject = require('./services/createProject');
const projectsList = require('./services/projectsList');
const createUs=require('./services/createUs');
const project = require('./services/project');
const deleteUs = require('./services/deleteUs');
const updateUs = require('./services/updateUs');
const updateUsState = require('./services/updateUsState');
const taskList = require('./services/taskList');
const createSprint = require('./services/createSprint');
const inviteToProject = require('./services/inviteToProject');
const listSprints = require('./services/listSprints');

router.use('/', addUser);
router.use('/', login);
router.use('/', createProject);
router.use('/', projectsList);
router.use('/', createUs);
router.use('/', project);
router.use('/', deleteUs);
router.use('/', updateUs);
router.use('/', updateUsState);
router.use('/', taskList);
router.use('/', addUser);
router.use('/', login);
router.use('/', createProject);
router.use('/', createSprint);
router.use('/', inviteToProject);
router.use('/', listSprints);

module.exports = router;
