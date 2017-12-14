const express = require('express');
const router = express.Router();
const bd_connexion = require ('../../BD/bd_connexion');


// Registration service
router.post('/createTask/:id_sprint', (req, res) => {

  description=req.body.taskDescription;
  user=req.body.taskUser;
  id_sprint=req.params.id_sprint;
  state=req.body.taskState;
console.log(id_sprint);
      bd_connexion.query('INSERT INTO tasks( description, state, user_id, sprint_id) VALUES (?,?,?,?)',[description,state,user,id_sprint], function(error, tasks, fields) {
			if(error){
        res.json({
        status:false,
        message:'there are some error with query'
			})
    }else {

      res.json(tasks);

    }

});
});


router.get('/user_id', (req, res) => {
id_project=2;
      bd_connexion.query('SELECT users.username FROM acl, users WHERE users.id=acl.user_id and acl.project_id=?',[id_project], function(error, data, fields) {
			if(error){
        res.json({
        status:false,
        message:'there are some error with query'
			})
    }else {

      res.send(JSON.stringify({
        result:data
      }));

    }

});
});



module.exports = router;
