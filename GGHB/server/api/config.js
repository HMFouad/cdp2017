var mysql      = require('mysql');

// Create connection
var connection = mysql.createConnection({
    host     : 'localhost',
    user     : 'root',
    password : '',
    database : 'cdp'
});
connection.connect(function(error){
  if(!!error){
    console.log('Error while connecting with database');
}
else {
  console.log('Database is connected');
}
});

module.exports = connection;