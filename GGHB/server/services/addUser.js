const express = require('express');
const router = express.Router();
const crypt = require('./encrypt');
const bd_connexion = require ('./../../bd/bd_connexion');


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

//insert into acl

/*router.post('/createProject/:id_project', (req, res) => {
	res.contentType('application/json');
  bd_connexion.query('INSERT INTO acl(user_id, project_id) VALUES (?,?)',	[req.body.user_id, req.params.id_project], (error,results) => {
if (error)
				sendError(res, 'sorry!!');
			else {
        res.send(JSON.stringify({
        result:results
      }));
			}
		});

});*/

module.exports = router;
