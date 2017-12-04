var connection = require('./../config');

module.exports.inviteProject = function (req, res, callback) {

  name = req.body.name;
  project = req.body.projectName;
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
    connection.query("SELECT * FROM `Acl` " +
      "WHERE user_id IN " +
      "(SELECT id FROM `Users` WHERE username=?) " +
      "AND project_id IN " +
      "(SELECT id from `Projects` WHERE project=?)", [name, project], function (error, resultsAffiliation) {
      if (resultsAffiliation.toString() != []) { //Si l'utilisateur est déjà affilié au projet
        res.json({
          status: true,
          message: 'User already affiliated with the project'
        });
      }
      else {
        connection.query("SELECT id FROM `Users` WHERE username=?; " +
          "SELECT id FROM `Projects` WHERE project=?", [name, project], function (error, resultsIfExists) {
            if (resultsIfExists[0].toString() == [] || resultsIfExists[1].toString() == []) {
              res.json({
                status: false,
                message: 'One of the fields filled is not in the database'
              });
            }
            else {
              connection.query("INSERT INTO `Acl`(`user_id`, `project_id`) VALUES (?,?)",
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
};
