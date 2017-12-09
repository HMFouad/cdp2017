const express = require("express");
const router = express.Router();
const tokendelay = require("./tokens/token_config");
const secretcode = require("./tokens/secret_code");
const jwt = require("jsonwebtoken");
const db_connexion = require('./../../bd/bd_connexion');

/**
 * @param {function(string)} handleCreation Function which handle the new token
 */
function createToken (handleCreation) {
    const newToken = jwt.sign('grr', secretcode.SECRET_CODE);
    db_connexion.query('SELECT * FROM users WHERE authToken = ?',[newToken], function (err, user) {
        if (err) {
            // TODO handle
        }

        if (user) {
            createToken(handleCreation);
        }
        else {
            handleCreation (newToken);
        }
    });
}
// Sign in service
router.post("/tokens", (req, res) => {
    console.log("Service POST /tokens");
    //const user = new User();
    var username_co = req.body.userName;
    var password_co = req.body.password;
    if (userName === null || password === null) {
        res
        .json({ success: false, message: "Missing userName or password" });
    }
    else {
        // TODO encrypt password 

        db_connexion.query('SELECT * FROM users WHERE username = ?',[username_co], function (error, results, fields) {
            if (err || !user) {
                res
                .json({ success: false, message: "Invalid login or password" });
            }
            /*
            console.log(token.value);
            token.expiresAt = tokendelay;
            //checkToken(user, token);
            user.authtoken = token;*/

            createToken((tokenValue) => {
                
                const expiresAt = new Date ();

                // one second in milliseconds
                const oneSecond = 1000;

                console.log('TokenValue   :   ' + tokenValue);

                db_connexion.query('INSERT INTO tokens(value, expires_at) VALUES (?,?,?)',[tokenValue,expiresAt], function(error, results, fields){
                    if(error){
                    res.json({
                        status:false,
                        message:'there are some error with tokens query'
                    })
                  }else{
                      res.json({
                        status:true,
                        data:results,
                        message:'Token created with success'
                    })
                  }
                });

                console.log("Test       3 ");
                console.log("Token  :   " + newToken);


                res
                    .status(statuscode.SUCCESS)
                    .json({
                        success: true,
                        message: "SUCCESS",
                        authtoken: user.authtoken,
                        user: user._id
                    });
            });
        });
    }
});

// Sign in service
router.delete("/tokens", (req, res) => {});

module.exports = router;
