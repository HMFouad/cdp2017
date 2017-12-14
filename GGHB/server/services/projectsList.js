const express = require("express");
const router = express.Router();
const db_connexion = require('./../../bd/bd_connexion');
    let pro = {};
// ProjectList service
router.post('/listProjects/:username', (req, res) => {
    const username_co = req.params.username;

    if (username_co === null) {
        res.json({ success: false, message: "Missing userName" });
    }
    else {
        db_connexion.query('SELECT * FROM users WHERE username = ?', [username_co], function (error, user, fields) {
            if (error) {
                console.log("query select user: error");
                res
                    .json({ success: false, message: "error select username" });
            } else if (username_co == user[0].username) {
                console.log("query select user: ok");
                console.log("UserID is:  " + user[0].id);

                db_connexion.query('SELECT * FROM acl WHERE user_id = ?', [user[0].id], function (error, acl, fields) {
                    if (error) {
                        console.log("query select project from acl: error");
                        res.json({ success: false, message: "User not found" });
                    } else {
                      console.log('Number of projects for this user is   :   ' + acl.length);
                      var projectsId = [];

                      for (var i = 0; i < acl.length; i++) {
                        projectsId.push(acl[i].project_id);
                      }
                            //Add token to users table
                            db_connexion.query('SELECT * FROM projects WHERE id in ( ? )', projectsId.join(), function (error, project, fields) {
                                if (error) {
                                    console.log("Query select project: error ");
                                }
                                else{
                                  res.json(project);
                                }
                            })
                    }
                });
            } else {
                console.log("Username not found");
            }
        });
    }
});

module.exports = router;
