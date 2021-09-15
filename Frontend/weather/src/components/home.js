import { useState, useEffect } from "react";
import axios from "axios";
import 'bootstrap/dist/css/bootstrap.min.css';
import { Carousel } from 'react-bootstrap';
import "./home.css"


export default function Home() {
  const [ip, setIp] = useState("");
  const [error, setError] = useState(null);
  const [weather, setWeather] = useState("");
  const [country, setCounrty] = useState("");

  /*var requestOptions = {
            method: 'GET',
            redirect: 'follow'
            };*/

  useEffect(() => {
    axios
      .get("https://geolocation-db.com/json/" /*, requestOptions*/, {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
        },
      })
      // .then(response => response.text())
      // .then(result => console.log(result))
      // .catch(error => console.log('error', error));
      .then(
        (result) => {
          setIp(result.data.IPv4);
          setCounrty(result.data.country_name);
          console.log(result.data.IPv4);
        },
        // Remarque : il faut gérer les erreurs ici plutôt que dans
        // un bloc catch() afin que nous n’avalions pas les exceptions
        // dues à de véritables bugs dans les composants.
        (error) => {
          setError(error);
          console.log(error);
        }
      );
  }, []);

  const getW = () => {
    axios
      .post("http://localhost:3001/weather/" /*, requestOptions*/, {
        data: {
          ip: ip,
        },
      })
      // .then(response => response.text())
      // .then(result => console.log(result))
      // .catch(error => console.log('error', error));
      .then(
        (result) => {
          setWeather(result.data);
        },
        // Remarque : il faut gérer les erreurs ici plutôt que dans
        // un bloc catch() afin que nous n’avalions pas les exceptions
        // dues à de véritables bugs dans les composants.
        (error) => {
          setError(error);
          console.log(error);
        }
      );
    console.log(weather);
    console.log(ip);
  };

  if (error) {
    return <div>Erreur : {error.message}</div>;
  } else {
    return (
      <div className="all">
        <h2 id ="title" >Welcome to WORLD WEATHER 🌞</h2>
        <h3 id="title_p">
          Wonder what's the weather today in your location ? 🤔
        </h3>
        <button id="btn1"onClick={getW}>See what does feels like today </button>
        {/* {weather.map((weathers) => (
            <div>
            <h1>{weathers.data.current_condition}</h1>

            </div>
       ))} */}

        {Object.keys(weather).map((item, i) => (
          <div>
            <div key={i}>
              <h2>{country}</h2>

              <span className="input-label">
                {" "}
                Weather:{" "}
                <br></br>
                <img className="icn-1"
                    src={weather[item].current_condition[0].weatherIconUrl[0].value}
                ></img>
                <br></br>
                {weather[item].current_condition[0].weatherDesc[0].value}
              </span>
               <p> &#8593; {weather[item].weather[0].maxtempC}° &nbsp; &nbsp; &#8595; {weather[item].weather[0].mintempC}°</p>
            </div>
            <div>
              <h2 id="title">Future days</h2>
              <h2>👇</h2>
              <Carousel>
                <Carousel.Item>
                  <div id="img_carousel"
                    className="d-block w-100"
                    
                
                  ></div>
                  <Carousel.Caption>
                    <h3>{weather[item].weather[1].date}</h3>
                    <img id="img_carousel1"
                    src={weather[item].weather[1].hourly[4].weatherIconUrl[0].value}
                ></img>
                    <p>
                    {weather[item].weather[1].hourly[4].weatherDesc[0].value}
                    </p>
                    <p>
                    <p> &#8593; {weather[item].weather[1].maxtempC}° &nbsp; &nbsp; &#8595; {weather[item].weather[1].mintempC}°</p>
                    </p>
                  </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item>
                <div id="img_carousel"
                    className="d-block w-100"
                    
                
                  ></div>
                  <Carousel.Caption>
                    <h3>{weather[item].weather[2].date}</h3>
                    <img id="img_carousel1"
                    src={weather[item].weather[2].hourly[4].weatherIconUrl[0].value}
                ></img>
                    <p>
                    {weather[item].weather[2].hourly[4].weatherDesc[0].value}
                    </p>
                    <p>
                    <p> &#8593; {weather[item].weather[2].maxtempC}° &nbsp; &nbsp; &#8595; {weather[item].weather[2].mintempC}°</p>
                    </p>
                  </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item>
                <div id="img_carousel"
                    className="d-block w-100"
                    
                
                  ></div>
                  <Carousel.Caption>
                    <h3>{weather[item].weather[3].date}</h3>
                    <img id="img_carousel1"
                    src={weather[item].weather[3].hourly[4].weatherIconUrl[0].value}
                ></img>
                    <p>
                    {weather[item].weather[3].hourly[4].weatherDesc[0].value}
                    </p>
                    <p>
                    <p> &#8593; {weather[item].weather[3].maxtempC}° &nbsp; &nbsp; &#8595; {weather[item].weather[3].mintempC}°</p>
                    </p>
                  </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item>
                <div id="img_carousel"
                    className="d-block w-100"
                    
                
                  ></div>
                  <Carousel.Caption>
                    <h3>{weather[item].weather[4].date}</h3>
                    <img id="img_carousel1"
                    src={weather[item].weather[4].hourly[4].weatherIconUrl[0].value}
                ></img>
                    <p>
                    {weather[item].weather[4].hourly[4].weatherDesc[0].value}
                    </p>
                    <p>
                    <p> &#8593; {weather[item].weather[4].maxtempC}° &nbsp; &nbsp; &#8595; {weather[item].weather[4].mintempC}°</p>
                    </p>
                  </Carousel.Caption>
                </Carousel.Item>
              </Carousel>
            </div>
          </div>
        ))}
      </div>
    );
  }
}
