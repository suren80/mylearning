const express = require('express');
var router = express.Router();
//const http = require('http');
//const PORT = require('./config');
var mysql = require('mysql');


/* const app = express();

app.use((req,res,next) => {
    res.sendStatus(200).json({message:"good"});
}); */



/* router.get('/login', function(req, res, next) {
    try{
      var data = {}
     // console.log(clientEmail);
      data.send = "Success";
      console.log(data);
      res.status(200).send(data);
    }
    catch(e){
      console.log("OMG ERROR");
    }
  }); */
  



router.get('/login',(request, response) =>{ 
    console.log("Inside API");
    let emailid = request.body.email;
    let em = [];
    var con = mysql.createConnection({
        host: "localhost",
        user: "root",
        password: "password",
        database: "survey"
      });
      
      con.connect(function(err) {
        if (err) throw err;
        console.log("Connected!");
        //SELECT * FROM login WHERE user_email = 'naeethrran@gmail.com'
        //var sql = "SELECT * FROM login WHERE user_email ='"+emailid+"'";
        var sql = "SELECT * FROM login";
        con.query(sql, function (err, rows, fields) {
          if (err) throw err;
          //console.log(result[0]['user_email']);
          //var em = [];
          //console.log(rows.length);
          //console.log(rows[0].user_email);
          var resss= rows.map( (data,key) => {
                em.push(data['user_email'])
          });
          console.log("EM Array ", em);
          //dbresponse = em;
          response.send(em);
        });
        con.end();
      });
      //console.log(dbresponse);
      
      
      //
   // response.send("success");
});

router.post('/login',(request, response) =>{ 
    //console.log("Inside POST API", request.body.email);
    let emailid = request.body.email;
    emailid = emailid.toString();
    let pwd = request.body.pwd;
    let dbresponse = {};
    //console.log(request);
   
    var con = mysql.createConnection({
        host: "localhost",
        user: "root",
        password: "password",
        database: "survey"
      });
      
      con.connect(function(err) {
        if (err) throw err;
        //console.log("Connected!");
        //var sql = "INSERT INTO login VALUES ('"+emailid+"', '"+pwd+"')";
        var sql = "SELECT * FROM login WHERE user_email ='"+emailid+"'";
       // console.log(sql);
        con.query(sql, function (err, result) {
          if (err) throw err;
          //console.log("1 record inserted");
          //console.log();
          if(result.length > 0){
            dbresponse = {"result": "success"}
          }else{
            dbresponse = {"result": "failure"};
          }
          
          response.send(dbresponse);
        });
        con.end();
      });
      
      
      
});



console.log("THis is node js");

//module.exports = app;

module.exports = router;