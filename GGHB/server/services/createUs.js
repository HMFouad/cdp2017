const express = require('express');
const router = express.Router();
const bd_connexion = require ('../../BD/bd_connexion');


// Registration service
router.post('/createUs/:id_project', (req, res) => {
const id_project = req.params.id_project;
  description=req.body.usDescription;
  priority=req.body.usPriority;
  difficulty=req.body.usDifficulty;
  state=req.body.usState;

      bd_connexion.query('INSERT INTO us(description,priority,difficult,state,project_id) VALUES (?,?,?,?,?)',[description,priority,difficulty,state,id_project], function(error, us, fields) {
			if(error){
        res.json({
        status:false,
        message:'there are some error with query'
			})
    }else {

      res.send(JSON.stringify({
        result:us
      }));

    }

});
});


module.exports = router;
