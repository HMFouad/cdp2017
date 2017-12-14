const express = require('express');
const router = express.Router();
const crypt = require('./encrypt');
const bd_connexion = require ('../../BD/bd_connexion');


// Registration service
router.post('/addUser', (req, res) => {

    const userName = req.body.userName;
    const password = crypt.encrypt(req.body.password);
    bd_connexion.query('INSERT INTO users(username, password) VALUES (?,?)',[userName,password], function(error, results, fields){
        if(error){
        res.json({
            status:false,
            message:'there are some error with query'
        })
      }else{
        res.send(JSON.stringify({
        result:results
      }));
      }
    });
});


module.exports = router;
