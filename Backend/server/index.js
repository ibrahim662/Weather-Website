const express = require("express");
const axios = require('axios');
const cors = require("cors");
const app = express();
const bodyParser = require("body-parser");
app.use(cors())

app.use(bodyParser.json());

app.use(bodyParser.urlencoded({ extended: true }));

const PORT = process.env.PORT || 3001;

app.listen(PORT, () => {
  console.log(`Server listening on ${PORT}`);
});



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