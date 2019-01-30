var express = require('express');
var bodyParser = require("body-parser");

var app = express();


app.use(bodyParser.urlencoded({extended: true}))
app.set("view engine", "ejs")


// app.get('/', function (req, res) {
   
//     var sql = require("mssql");

//     // config for your database
//     var config = {
//         user: 'sa',
//         password: 'mypassword',
//         server: 'localhost', 
//         database: 'SchoolDB' 
//     };

//     // connect to your database
//     sql.connect(config, function (err) {
    
//         if (err) console.log(err);

//         // create Request object
//         var request = new sql.Request();
           
//         // query to the database and get the records
//         request.query('select * from Student', function (err, recordset) {
            
//             if (err) console.log(err)

//             // send records as a response
//             res.send(recordset);
            
//         });
//     });
// });

app.get('/',function(req,res){
    res.render('home');
});

var server = app.listen(3000, function () {
    console.log('Server is running..');
});