var connection = require('./../config');
module.exports.createSprint=function(req,res){
	number=req.body.name;
  date_begin=req.body.date_begin;
  date_end=req.body.date_end;
  
      connection.query('INSERT INTO sprints(number,date_begin,date_end,project_id) VALUES (?,?,?)',[number,date_begin,date_end,16], function(error, rows) {
			if(error){
      console.log(error);
			}
      else{
        console.log('cool!!!!');
        console.log(rows);
      
      }

});
}
