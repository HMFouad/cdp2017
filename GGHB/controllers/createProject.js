var connection = require('./../config');

module.exports.createProject=function(req,res){

    name=req.body.name;
    description=req.body.description;

    if (name == "") {
        console.log("Empty name!!!");
      }
        
      else{
    
      connection.query('INSERT INTO projects(project, description) VALUES (?,?)',[name,description], function(error, rows){
        if(error){
        res.json({
            status:false,
            message:'there are some error with query'
        })
      }else{
          res.json({
            status:true,
            data:results,
            message:'Project added with success'
        })
      }
    });
}
}