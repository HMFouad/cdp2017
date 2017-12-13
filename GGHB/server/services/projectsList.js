const express = require("express");
const router = express.Router();
const tokendelay = require("./tokens/token_config");
const secretcode = require("./tokens/secret_code");
const jwt = require("jsonwebtoken");
const db_connexion = require('./../../bd/bd_connexion');
const crypt = require('./encrypt');

// ProjectList service
router.post('/projectslist',(req, res) => {
    console.log("Service POST /projectsList");
    var username_co = req.body.userName;
    console.log("userName for ListProjects: " + username_co);

    db_connexion.query('SELECT * FROM users WHERE username = ?', [username_co], function (error, user, fields) {
        if (error) {
            console.log("query select user: error");
            res
                .json({ success: false, message: "User not found" });
        } else {
            console.log("query select user: ok");
            console.log("UserID is:  " + user[0].id);
        }


    db_connexion.query('SELECT * FROM acl WHERE user_id = ?', [user[0].id], function (error, project, fields) {
        if (error) {
            console.log("query select project: error");
            res.json({ success: false, message: "User not found" });
        } else {
            console.log('Nombre de projet   :   ' + project.length);
            console.log("query select project: ok");

            for (var i=0;i<project.length;i++){
                console.log("ProjectID is:  " + project[i].project_id);
            }
        }
    });
});


})

module.exports = router;
