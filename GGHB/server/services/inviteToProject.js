const express = require('express');
const router = express.Router();
const bd_connexion = require('../../BD/bd_connexion');

router.post('/inviteToProject/:projectID/', (req, res) => {
const name = req.body.username_inv;

if (name == "") {
  console.log("You haven't completed all fields");
}
else {
  console.log("SLT");
  bd_connexion.query("SELECT `id` FROM `users` WHERE username=?", name, function(error, user){
    if(error){
      console.log(error);
    }
    else {
      const idUser = user[0].id;
      const projectID = req.params.projectID;
      bd_connexion.query("INSERT INTO `acl`(`user_id`, `project_id`) VALUES ( ?, ? )", [idUser, projectID], function (error2, user) {
        if (error2) {
          console.log(error2);
        }
      });
    }
  });
}
});

module.exports = router;
