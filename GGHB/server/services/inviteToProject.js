const express = require('express');
const router = express.Router();
const bd_connexion = require('./../../bd/bd_connexion');


router.post('/inviteToProject', (req, res) => {
  const name = req.body.username_inv;
const project = req.body.projectName;

if (name == "" || project == "") {
  console.log("You haven't completed all fields");
}
else {
  var callback = function (result) {
    alreadyAffiliated = result;
  };
  var alreadyAffiliated = false;
  //let addUserInProject = false;
  //Regarde si l'utilisateur est déjà affilié au projet
  bd_connexion.query("SELECT * FROM `acl` " +
    "WHERE user_id IN " +
    "(SELECT id FROM `users` WHERE username=?) " +
    "AND project_id IN " +
    "(SELECT id from `projects` WHERE project=?)", [name, project], function (error, resultsAffiliation) {
    if (resultsAffiliation.toString() != []) { //Si l'utilisateur est déjà affilié au projet
      res.json({
        status: true,
        message: 'User already affiliated with the project'
      });
    }
    else {
      bd_connexion.query("SELECT id FROM `users` WHERE username=?; " +
        "SELECT id FROM `projects` WHERE project=?", [name, project], function (error, resultsIfExists) {
          if (resultsIfExists[0].toString() == [] || resultsIfExists[1].toString() == []) {
            res.json({
              status: false,
              message: 'One of the fields filled is not in the database'
            });
          }
          else {
            bd_connexion.query("INSERT INTO `acl`(`user_id`, `project_id`) VALUES (?,?)",
              [resultsIfExists[0][0].id, resultsIfExists[1][0].id],
              function (error, resultsInsert) {
                if (error) throw error;
                res.json({
                  status: true,
                  message: 'The user has been affiliated with the project'
                });
              });
          }
        }
      );
    }
  });
}
});
module.exports = router;
