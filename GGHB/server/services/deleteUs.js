const express = require('express');
const router = express.Router();
const bd_connexion = require ('../../BD/bd_connexion');


//delete us

router.post('/deleteUs', (req, res) => {
//id_project=req.body.project_id;
id_us=req.body.id_us;
console.log(id_us);
      bd_connexion.query('DELETE FROM us WHERE  id=?',[id_us],  function(error, data) {
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
