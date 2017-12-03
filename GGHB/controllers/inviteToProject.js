var connection = require('./../config');

module.exports.inviteToProject=function(req,res){

  name=req.body.name;
  project=req.body.projectName;
  console.log("test");
  if (name=="" or project=="") {
    console.log("You haven't completed all fields");
  }
  else{
    connection.query("SELECT FROM Users(username) WHERE username= ?", name, function (error, resultats, fields) {
      if (error) {
        res.json({
          status: false,
          message: 'there are some error with query'
        })
      }
      else {
        res.json({
          status: true,
          message: 'it works'
        })
      }
    }
  }
/*
    connection.query('INSERT INTO Acl(user_id, project_id) VALUES (?,?)',[name,project], function(error, results, fields){
      if(error){
        res.json({
          status:false,
          message:'there are some error with query'
        })
      }else{
        res.json({
          status:true,
          data:results,
          message:'The user has been added to the current project'
        })
      }
    });
  }
  */
}
