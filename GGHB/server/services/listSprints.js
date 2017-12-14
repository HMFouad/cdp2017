const express = require("express");
const router = express.Router();
const tokendelay = require("./tokens/token_config");
const secretcode = require("./tokens/secret_code");
const jwt = require("jsonwebtoken");
const db_connexion = require('./../../bd/bd_connexion');
const crypt = require('./encrypt');

router.post('/listSprints/:projectID', (req, res) => {

const projectID = req.params.projectID;
console.log("projectID for ListSprints: " + projectID);

db_connexion.query('SELECT * FROM `sprints`  WHERE project_id = ?', projectID, function (error, sprints, fields) {
  if (error) {
    console.log(error);
  }
  else {
    res.json(sprints);
  }
});
});

module.exports = router;
