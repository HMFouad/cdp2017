const express = require('express');
const router = express.Router();
const addUser = require('./services/addUser');
const login = require('./services/tokens');
const createProject = require('./services/createProject');
const createSprint = require('./services/createSprint');
const inviteToProject = require('./services/inviteToProject');
const listSprints = require('./services/listSprints');
router.use('/', addUser);
router.use('/', login);
router.use('/', createProject);
router.use('/', createSprint);
router.use('/', inviteToProject);
router.use('/', listSprints);

module.exports = router;
