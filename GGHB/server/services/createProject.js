const express = require('express');
const router = express.Router();
const bd_connexion = require ('./../../bd/bd_connexion');


// Registration service
router.post('/createProject', (req, res) => {
    const user_id =req.body.user_id;
    const projectName = req.body.projectName;
    const projectDescription = req.body.projectDescription;
    bd_connexion.query('INSERT INTO projects(project, description) VALUES (?,?)',[projectName,projectDescription], function(error, results, fields){
        if(error){
        res.json({
            status:false,
            message:'there are some error with query'
        })
      }else{
        bd_connexion.query('INSERT INTO acl(user_id, project_id) VALUES (?,?)',	[req.body.user_id, results.insertId], (error) => {
						if (error)
							sendError(res, 'Error!!!');
						else
							res.status(200).send({idInsert: results.insertId});
						});

        }
    });
});

module.exports = router;
