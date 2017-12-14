const express = require('express');
const router = express.Router();
const bd_connexion = require('./../../bd/bd_connexion');

//liste des us

router.post('/project/:id_project', (req, res) => {

  const id_project = req.params.id_project;

bd_connexion.query('SELECT * FROM  us WHERE project_id= "' + id_project + '" ', function (error, us) {
  if (error) {
    console.log(error);
    return next("Erreur de requete");
  } else {
    res.json(us);
  }
});
})
;
module.exports = router;
