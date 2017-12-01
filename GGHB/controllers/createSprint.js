var connection = require('./../config');

module.exports.createSprint=function(req,res){

  date_begin=req.body.date_begin;
  date_end=req.body.date_end;
           
      connection.query('INSERT INTO sprints(date_begin, date_end) VALUES (?,?)',[date_begin,date_end], function(error, results, fields){
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