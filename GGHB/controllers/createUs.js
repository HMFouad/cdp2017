var connection = require('./../config');

module.exports.createUs=function(req,res){

  description=req.body.usDescription;
  priority=req.body.usPriority;
  difficulty=req.body.usDifficulty;
  state=req.body.usState;

    connection.query('INSERT INTO us(description,priority,difficult,state) VALUES (?,?,?,?)',[description,priority,difficulty,state], function(error, results, fields) {
			if(error){
        res.json({
        status:false,
        message:'there are some error with query'
			})
    }else{
        res.json({
          status:true,
          data:results,
          message:'Sprint added with success'
      })
      }

});
}
