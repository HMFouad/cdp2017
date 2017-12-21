const express = require('express');
const router = express.Router();
const bd_connexion = require('../../BD/bd_connexion');


// Registration service
router.post('/createProject/:username/', (req, res) => {
  const username = req.params.username;
  const projectName = req.body.projectName;
  const projectDescription = req.body.projectDescription;

  bd_connexion.query('SELECT * FROM `users` WHERE username=?', username, function (error, user) {
    bd_connexion.query('INSERT INTO projects(project, description) VALUES (?,?)', [projectName, projectDescription], function (error, results, fields) {
      if (error) {
        res.json({
          status: false,
          message: 'there are some error with query'
        })
      }
    });


    bd_connexion.query('SELECT * FROM `projects` WHERE project=?', projectName, function (error, pro) {
      if (error) {
        console.log('Error selection project');
      }
      else {
        bd_connexion.query('INSERT INTO acl(user_id, project_id) VALUES (?,?)', [user[0].id, pro[0].id], (error) => {
          if (error) {
            console.log('Error insertion into ACL')
          }
        });
      };
    })



  });
});

module.exports = router;
