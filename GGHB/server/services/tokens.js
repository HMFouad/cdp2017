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
    console.log('New token: ' + newToken.tokenValue);
    console.log('New token: ' + newToken.expiresAt);
    db_connexion.query('SELECT * FROM users WHERE authToken = ?',[newToken], function (err, user) {
        if (err) {
            console.log('Error creation token');
            // TODO handle
        }

        /*if (user) {
            createToken(handleCreation);
            console.log('creation token');
        }*/
        else {
            handleCreation (newToken);
        }
    });
}
// Sign in service
router.post('/login', (req, res) => {
    console.log("Service POST /login");
    var username_co = req.body.userName;
    var password_co = req.body.password;
    console.log("userName for connexton: " + username_co);
    console.log("Password for connexion: " + password_co);
    if (username_co === null || password_co === null) {
        res
        .json({ success: false, message: "Missing userName or password" });
    }
    else {
        // TODO encrypt password 

        db_connexion.query('SELECT * FROM users WHERE username = ?',[username_co], function (error, user, fields) {
            if (error) {
                console.log("query select user: error");
                res
                .json({ success: false, message: "Invalid login or password" });
            }
            
            //console.log(token.value);
            //token.expiresAt = tokendelay;
           // checkToken(user, token);
            

            console.log("query select user: ok");

            createToken((tokenValue) => {
                console.log('Create token');
                const date = new Date ();

                // one second in milliseconds
                const oneSecond = 1000;

                const expiresAt = new Date (date.getTime() + tokendelay.TOKEN_DELAY * oneSecond);

                console.log('TokenValue   :   ' + tokenValue);
                console.log('Tokendelai   :   ' + expiresAt);

                db_connexion.query('INSERT INTO tokens(value, expire_at) VALUES (?,?)',[tokenValue,expiresAt], function(error, results, fields){
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

                        // user.authToken = ...
                  }
                });

                res
                    //.status(statuscode.SUCCESS)
                    .json({
                        success: true,
                        message: "SUCCESS",
                        //authtoken: user.authtoken,
                        //user: user._id
                    });

            });
        });

        console.log("Test       3 ");
        //console.log("Token  :   " + newToken);
        var sql = "UPDATE users SET authToken = 'tokenValue' WHERE username = 'username_co'";
        db_connexion.query(sql, function(err, result){
            if(err){
                console.log("Test       4 ");

              }else{
                console.log("Test       5 ");

        }
        })

    }
});

// Sign in service
router.delete("/login", (req, res) => {});

module.exports = router;
