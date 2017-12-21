const express = require('express');
const router = express.Router();
const bd_connexion = require ('../../BD/bd_connexion');

// update us

router.post('/updateUs', (req, res) => {
//id_project=req.body.project_id;
id_us=req.body.id_us;
desc=req.body.description;
diff=req.body.difficult;
prio=req.body.priority;
state=req.body.state;

  //  bd_connexion.query('UPDATE us SET description=?, priority=?, difficult=?, state=? WHERE id=?',[desc,prio,diff, state, id_us],  function(error, data) {
  bd_connexion.query('UPDATE us SET  priority=? WHERE id=?',[prio,id_us],  function(error, data) {
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

module.exports = router;
