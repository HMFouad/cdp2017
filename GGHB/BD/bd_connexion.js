var mysql      = require('mysql');

// Create connection
var connection = mysql.createConnection({
    host     : 'bd_gghb',
    user     : 'root',
    password : '',
    database : 'cdp',
    multipleStatements: true,
});
connection.connect(function(error){
  if(!!error){
    console.log('Error while connecting with database', error);
}
else {
  console.log('Database is connected');
}
});

module.exports = connection;
