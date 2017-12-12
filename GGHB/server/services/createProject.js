const express = require('express');
const router = express.Router();
const bd_connexion = require ('./../../bd/bd_connexion');


// Registration service
router.post('/createProject', (req, res) => {

    const projectName = req.body.projectName;
    const projectDescription = req.body.projectDescription;
    bd_connexion.query('INSERT INTO projects(project, description) VALUES (?,?)',[projectName,projectDescription], function(error, results, fields){
        if(error){
        res.json({
            status:false,
            message:'there are some error with query'
        })
      }else{
          res.json({
            status:true,
            data:results,
            message:'Inscription done with success'
        })
      }
    });
});

module.exports = router;
