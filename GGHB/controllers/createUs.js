var connection = require('./../config');
module.exports.createUs=function(req,res){
  description=req.body.usDescription;
  priority=req.body.usPriority;
  difficulty=req.body.usDifficulty;
  state=req.body.usState;
    connection.query('INSERT INTO us(description,priority,difficult,state,project_id) VALUES (?,?,?,?,?)',[description,priority,difficulty,state,16], function(error, rows) {
			if(error){
      console.log(error);
			}
      else{
        console.log('cool!!!!');
        console.log(rows);
      
      }

});
}
