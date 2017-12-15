const express = require("express");
const router = express.Router();
const tokendelay = require("./tokens/token_config");
const secretcode = require("./tokens/secret_code");
const jwt = require("jsonwebtoken");
const db_connexion = require('../../BD/bd_connexion');
const crypt = require('./encrypt');

/**
 * @param {function(string)} handleCreation Function which handle the new token
 */
function createToken(handleCreation) {
    const newToken = jwt.sign(Math.random(), secretcode.SECRET_CODE);

    db_connexion.query('SELECT * FROM tokens WHERE value = ?', [newToken], function (err, token) {
        if (err) {
            console.log('Error creation token');
        }

        else if (token.data > 0) {
            createToken(handleCreation);
        }
        else {
            handleCreation(newToken);
        }
    });
}
// Sign in service
router.post('/login', (req, res) => {
    var username_co = req.body.userName;
    var password_co = crypt.encrypt(req.body.password);
    if (username_co === null || password_co === null) {
        res
            .json({ success: false, message: "Missing userName or password" });
    }
    else {
        db_connexion.query('SELECT * FROM users WHERE username = ?', [username_co], function (error, user, fields) {
            if (error) {
                console.log("query select user: error");
                res
                    .json({ success: false, message: "Invalid login or password" });
            } else if (password_co == user[0].password) {

                createToken((tokenValue) => {
                    const date = new Date();

                    // one second in milliseconds
                    const oneSecond = 1000;

                    const expiresAt = new Date(date.getTime() + tokendelay.TOKEN_DELAY * oneSecond);

                    db_connexion.query('INSERT INTO tokens(value, expire_at) VALUES (?,?)', [tokenValue, expiresAt], function (error, results, fields) {
                        if (error) {
                            res.json({
                                status: false,
                                message: 'there are some error with tokens query'
                            })
                        } else {
                            res.json({
                                status: true,
                                data: results,
                                message: 'Token created with success'
                            });
                        }
                    });

                    //Add token to users table
                    db_connexion.query('UPDATE users SET authToken = ? WHERE username = ?', [tokenValue, username_co], function (error, res) {
                        if (error) {
                            console.log("Error insertion token to table users ");
                        } else {
                        }
                    })
                });

            } else {
                console.log("Username and password does not match");
            }
        });
    }
});

// Sign in service
router.delete("/login", (req, res) => { });

module.exports = router;
