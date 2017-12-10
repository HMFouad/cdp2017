const express = require('express');
const router = express.Router();
const addUser = require('./services/addUser');
const login = require('./services/tokens');

router.use('/', addUser);
router.use('/', login);

module.exports = router;
