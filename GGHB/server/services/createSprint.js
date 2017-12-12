const express = require('express');
const router = express.Router();
const bd_connexion = require('./../../bd/bd_connexion');


router.post('/createSprint', (req, res) => {

  const dateBegin = req.body.dateBegin;
const dateEnd = req.body.dateEnd;
const sprintName = req.body.sprintName;

connection.query('SELECT id FROM `Projects` WHERE project=?', req.body.projectName, function (error, results) {
    if (error) {
      throw error;
    }
    else {
      const project_id = results[0].id;
      bd_connexion.query('INSERT INTO Sprints(sprint_name, date_begin, date_end, project_id) VALUES (?, ?, ?, ?)', [sprintName, dateBegin, dateEnd, project_id], function (error, results, fields) {
        if (error) {
          res.json({
            status: false,
            message: 'there are some error with query'
          })
        }
        else {
          res.json({
            status: true,
            data: results,
            message: 'Sprint added with success'
          })
        }
      });
    }
  }
);
})
;

module.exports = router;
