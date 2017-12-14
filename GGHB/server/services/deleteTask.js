const express = require('express');
const router = express.Router();
const bd_connexion = require ('./../../bd/bd_connexion');


//delete us

router.post('/deleteTask', (req, res) => {
id_task=req.body.id_task;
      bd_connexion.query('DELETE FROM tasks WHERE  id=?',[id_task],  function(error, data) {
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
