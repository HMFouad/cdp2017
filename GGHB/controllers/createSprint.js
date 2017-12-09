var connection = require('./../config');


module.exports.createSprint = function (req, res) {

  const date_begin = req.body.date_begin;
  const date_end = req.body.date_end;
  const sprint_name = req.body.sprint_name;

  connection.query('SELECT id FROM `Projects` WHERE project=?', req.body.project, function (error, results) {
      if (error) {
        throw error;
      }
      else {
        const project_id = results[0].id;
        connection.query('INSERT INTO Sprints(sprint_name, date_begin, date_end, project_id) VALUES (?, ?, ?, ?)', [sprint_name, date_begin, date_end, project_id], function (error, results, fields) {
          if (error) {
            res.json({
              status: false,
              message: 'there are some error with query'
            })
          }
          else {
            res.json({
              status: true,
              data: results,
              message: 'Sprint added with success'
            })
          }
        });
      }
    }
  );
};
