const express = require('express');
const router = express.Router();
const bd_connexion = require ('./../../bd/bd_connexion');

//liste des taches
router.post('/listTasks/:id_sprint', (req, res) => {
const id_sprint = req.params.id_sprint;
  bd_connexion.query('SELECT * FROM  tasks WHERE sprint_id= "' + id_sprint + '" ',  function(error, tasks) {
      if (error) {
            console.log(error);
            return next("Erreur de requete");
          } else {
             res.json(tasks);
          }

});
});
module.exports = router;
