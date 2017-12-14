const express = require('express');
const router = express.Router();
const bd_connexion = require ('./../../bd/bd_connexion');


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


/*
// update us

module.exports.updateUs=function(req,res){
//id_project=req.body.project_id;
id_us=req.body.id_us;
desc=req.body.description;
diff=req.body.difficult;
prio=req.body.priority;
state=req.body.state;

    connection.query('UPDATE us SET description=?, priority=?, difficult=?, state=? WHERE id=?',[desc,prio,diff, state, id_us],  function(error, data) {
          if (error) {
            console.log(error);
            return next("Erreur de requete");
          } else {

            res.send(JSON.stringify({

              result:data
            }));

          }

});
}

//delete us

module.exports.deleteUs=function(req,res){
//id_project=req.body.project_id;
id_us=req.body.id_us;
console.log(id_us);
    connection.query('DELETE FROM us WHERE  id=?',[id_us],  function(error, data) {
          if (error) {
            console.log(error);
            return next("Erreur de requete");
          } else {

            res.send(JSON.stringify({

              result:data
            }));

          }

});
}*/

module.exports = router;
