const express = require('express');
const router = express.Router();
const addUser = require('./services/addUser');
const tokens = require('./services/tokens');

router.use('/', addUser);
router.use('/', tokens);

module.exports = router;
