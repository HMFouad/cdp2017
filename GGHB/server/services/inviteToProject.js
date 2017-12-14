const express = require('express');
const router = express.Router();
const bd_connexion = require('../../BD/bd_connexion');

router.post('/inviteToProject/:projectID/', (req, res) => {
const projectID = req.params.projectID;
const name = req.body.username_inv;

if (name == "") {
  console.log("You haven't completed all fields");
}
else {
  bd_connexion.query("SELECT `id` FROM `users` WHERE username=?", name, function(error, idUser){
    console.log("1111111");
    console.log(idUser);
  })
}
});

module.exports = router;
