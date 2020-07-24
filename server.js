const express = require('express');
var mysql = require('mysql')
const bodyParser = require('body-parser');
var axios = require('axios');

const app = express();
// allow cors
app.use(function(req, res, next) {
  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
  next();
});
// ---
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: false}));
const port = 3031;
var connection = mysql.createConnection({
  host: '127.0.0.1',
  user: 'jeremy',
  password: 'foo',
  port: '3306',
  database: 'finadb'
})

connection.connect((err) => {
    console.log('Are we even running this?')
    if (err) {
      console.log('Database error:', err);
      throw err
    } else {
      console.log('You are now connected...');
      
    }
  });

  app.get('/at', (req, res) => {
    res.send('AT /');
    console.log('/atted')
  })

  
  app.post('/createProfile', (req, res) => {
      var form = req.body.formObj;
      var sql =`INSERT INTO \`SwimmerProfiles\` (\`SwimID\`, \`Fname\`, \`Lname\`, \`BestRec\`, \`EmpID\`, \`CountryID\`) VALUES (NULL, '${form.Fname}', '${form.Lname}', '${form.BestRec}', '1', '${form.CountryID}');`
      connection.query(sql, function (err, result) {
        if(err){
            console.log(err);
            console.log(form);
        }
        console.log("INSERTED");
        res.send(result)
      });
    })

    app.listen(port, () => console.log(`Example app listening on port ${port}!`))