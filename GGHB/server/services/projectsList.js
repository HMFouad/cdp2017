const express = require("express");
const router = express.Router();
const db_connexion = require('./../../bd/bd_connexion');
    let pro = {};
// ProjectList service
router.post('/projectslist', (req, res) => {



    console.log("Service POST /projectslist");
    var username_co = req.body.userName;
    console.log("userName for ListProjects: " + username_co);

    if (username_co === null) {
        res
            .json({ success: false, message: "Missing userName" });
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

                        for (var i = 0; i < acl.length; i++) {

                            //Add token to users table
                            db_connexion.query('SELECT * FROM projects WHERE id = ?', [acl[i].project_id], function (error, project, fields) {
                                if (error) {
                                    console.log("Query select project: error ");
                                } else {
                                    pro = { id : project[0].id, 
                                            name: project[0].project, 
                                            description: project[0].description};
                                    console.log('Project id   :   ' + pro.id);
                                }
                            })
                        }
                        res.json(JSON.stringify(pro));
                    }
                });
            } else {
                console.log("Username not found");
            }
        });
    }
});

module.exports = router;
