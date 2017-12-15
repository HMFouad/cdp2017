const express = require('express');
const router = express.Router();
const bd_connexion = require('./../../BD/bd_connexion');

// update us

router.post('/updateTask', (req, res) => {
  id_task = req.body.id_task;
  state = req.body.state;
  bd_connexion.query('UPDATE tasks SET  state=? WHERE id=?', [state, id_task], function (error, data) {
    if (error) {
      console.log(error);
      return next("Erreur de requete");
    } else {

      res.send(JSON.stringify({

        result: data
      }));

    }

  });
});

module.exports = router;
