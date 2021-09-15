const express = require("express");
const axios = require('axios');
const cors = require("cors");
const app = express();
const bodyParser = require("body-parser");
app.use(cors())
const mysql = require('mysql');
const bcrypt = require("bcrypt");
const saltRounds = 10;
const session = require("express-session");
const jwt = require('jsonwebtoken');



app.use(bodyParser.json());

app.use(bodyParser.urlencoded({ extended: true }));

const PORT = process.env.PORT || 3001;

app.listen(PORT, () => {
  console.log(`Server listening on ${PORT}`);
});

const db = mysql.createConnection({
  host: "localhost",
  user: "root",
  password: "13.11.97ibra90H",
  database: "weather"
});
db.connect(function (error) {
  if (!!error) {
    console.log(error);
  } else {
    console.log('Connectedd!:)');
  }
});


app.post('/register', function (req, res) {
  console.log(req.body);
  const username = req.body.username;
  const password = req.body.password;
  const email = req.body.email;

  bcrypt.hash(password, saltRounds, (err, hash) => {
    if (err) {
      console.log(err)
    }

    db.query("INSERT INTO users(username, password, email) VALUES (?,?,?)",
      [username, password, email],

      function (err) {
        if (err) {
          res.send('failed');
        } else {
          res.send("successfully registered " + username)
        }
      }
    );
  })
})


app.post('/login', function (req, res) {
  const email = req.body.email
  const password = req.body.password;

  db.query("SELECT * FROM users WHERE email = ? AND password = ?",
    [email, password],
    (err, result) => {
      if (err) {
        res.send({ err: err });
      }

      if (result.length > 0) {
        bcrypt.compare(password, result[0].password, (error, response) => {

          res.status(200).json({
            userId: db.id,
            token: jwt.sign(
              { userId: db.id },
              'RANDOM_TOKEN_SECRET',
              { expiresIn: '24h' } 
            )
          })
        })
      } else {
        res.send({ message: "Mauvais mots de passe ou email" });
      }

    }

  );
})

app.get('/profil', function(req, res, next) {
    
  	userId = db.id;

  db.query("SELECT * FROM users ", function (err, result, fields) {
    if (err) throw err;
    console.log(result);
    res.send(result);
})});


app.post("/weather", (req, res) => {
  const ip = req.body.data.ip

  axios.get("http://api.worldweatheronline.com/premium/v1/weather.ashx?key=afb937f8e81c4f1385c80611211509&q="+ip+"&format=json&num_of_days=5", {
    data:{
        ip: req.body.ip,
      },
      
    })
      .then(response => {
        console.log(response.data)
        res.send(response.data)
      })
      .catch(error => {
        console.log(error.message)
    
      })
    
    })