const express = require('express');
const router = express.Router();
const bd_connexion = require ('./../../bd/bd_connexion');



//liste des us
router.post('/project', (req, res) => {
id_project=req.body.id_project;
//id_project=16;
console.log(id_project);
    bd_connexion.query('SELECT * FROM  us WHERE project_id= "' + id_project + '" ',  function(error, data) {
      if (error) {
            console.log(error);
            return next("Erreur de requete");
          } else {

            res.send(JSON.stringify({

              result:data
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
