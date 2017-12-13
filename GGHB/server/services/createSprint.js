const express = require('express');
const router = express.Router();
const bd_connexion = require('./../../bd/bd_connexion');


router.post('/createSprint', (req, res) => {

  const dateBegin = req.body.dateBegin;
const dateEnd = req.body.dateEnd;
const sprintName = req.body.sprintName;
const projectName = req.body.projectName;
const nbSprint = req.body.nbSprint;

bd_connexion.query('SELECT id FROM `projects` WHERE project=?', projectName, function (error, results) {
  if (error) {
    throw error;
  }
  else {
    const projectId = results[0].id;
    bd_connexion.query('INSERT INTO sprints(nb, date_begin, ' +
      'date_end, project_id, sprint_name) VALUES (?, ?, ?, ?, ?)', [nbSprint, dateBegin, dateEnd, projectId, sprintName], function (error, results, fields) {
      if (error) {
        throw error;
      }
    });
  }
});
});
module.exports = router;
