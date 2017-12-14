const express = require('express');
const router = express.Router();
const bd_connexion = require('../../BD/bd_connexion');


router.post('/createSprint/:projectID', (req, res) => {

  const dateBegin = req.body.dateBegin;
const dateEnd = req.body.dateEnd;
const sprintName = req.body.sprintName;
const projectID = req.params.projectID;
const nbSprint = req.body.nbSprint;

console.log("project_id=" + projectID);
bd_connexion.query('SELECT id FROM `projects` WHERE project=?', projectID, function (error, results) {
  if (error) {
    throw error;
  }
  else {
    bd_connexion.query('INSERT INTO sprints(nb, date_begin, ' +
      'date_end, project_id, sprint_name) VALUES (?, ?, ?, ?, ?)', [nbSprint, dateBegin, dateEnd, projectID, sprintName], function (error, results, fields) {
      if (error) {
        throw error;
      }
    });
  }
});
});
module.exports = router;
