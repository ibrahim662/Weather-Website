import { useState, useEffect } from "react";
import axios from "axios";
import "bootstrap/dist/css/bootstrap.min.css";
import { Carousel } from "react-bootstrap";
import "./cities.css";

export default function Cities() {
  const [error, setError] = useState(false);
  const [city, setCity] = useState("");
  const [searchAll, setSearchAll] = useState("");

  /*var requestOptions = {
              method: 'GET',
              redirect: 'follow'
              };*/

  useEffect(() => {
    console.log(searchAll.length);
    if (searchAll === "" || searchAll.length < 3) return;
    axios
      .post(
        "http://api.worldweatheronline.com/premium/v1/weather.ashx?key=a4820d17519f46ab8c8145354211709&q=" +
          searchAll +
          "&format=json&num_of_days=5" /*, requestOptions*/,
        {}
      )
      // .then(response => response.text())
      // .then(result => console.log(result))
      // .catch(error => console.log('error', error));
      .then(
        (result) => {
          setError(false);
          // console.log("mon result", result.data.data);
          // console.log("---", Object.keys(result.data.data).length)
          setCity(result.data.data);
        }
        // Remarque : il faut gérer les erreurs ici plutôt que dans
        // un bloc catch() afin que nous n’avalions pas les exceptions
        // dues à de véritables bugs dans les composants.
      )
      .catch((error) => {
        console.log("error ", error);
      });
  }, [searchAll]);

  /* ---------- WatchList button -------------*/

  //  const CiwatchList = () => {

  //    const citiesWatchlist= [city.request[0].query]
  //    const loggedInUser = localStorage.getItem("user");

  //    if (loggedInUser) {
  //     const foundUser = JSON.parse(loggedInUser);
  //     setUser(foundUser);
  //     {Object.keys(city).length === 4 ? (
  //       console.log("watchlist", citiesWatchlist)
  //       ) : (
  //        console.log("nothing")
  //        )}
  //        axios.post("http://localhost:3001/watchlist", {

  //          citiesWatchlist: citiesWatchlist,

  //         }).then((response) => {
  //           console.log(response)
  //     })
  //   }else{
  //     alert("you have to be logged in")
  //   }
  //   }

  // const cities = city.request[0].query;
  return (
    <div>
      <input
        type="text"
        id="name"
        required
        size="10"
        className="inT"
        placeholder="Search for cities"
        onChange={(e) => {
          setSearchAll(e.target.value);
        }}
      />
      <br></br>
      <div className="main">
        <ul className="cards">
          {Object.keys(city).length === 4 ? (
            <div>
              <div>
                <span className="input-label">
                  {" "}
                  Weather: <br></br>
                  <h2>{city.request[0].query}</h2>
                  <img
                    className="icn-1"
                    src={city.current_condition[0].weatherIconUrl[0].value}
                    alt="weatherImg"
                  ></img>
                  <br></br>
                  {city.current_condition[0].weatherDesc[0].value}
                </span>
                <p>
                  {" "}
                  &#8593; {city.weather[0].maxtempC}° &nbsp; &nbsp; &#8595;{" "}
                  {city.weather[0].mintempC}°
                </p>
              </div>
              <div>
                {/* <button className="btn-1"
                onClick = {CiwatchList}
                
                >Add to my watchlist</button> */}
                <h2 id="title">Future days</h2>
                <h2>👇</h2>
                <Carousel>
                  <Carousel.Item>
                    <div id="img_carousel" className="d-block w-100"></div>
                    <Carousel.Caption>
                      <h3>{city.weather[1].date}</h3>
                      <img
                        id="img_carousel1"
                        src={city.weather[1].hourly[4].weatherIconUrl[0].value}
                        alt="weatherImg"
                      ></img>
                      <p>{city.weather[1].hourly[4].weatherDesc[0].value}</p>
                      <p>
                        <p>
                          {" "}
                          &#8593; {city.weather[1].maxtempC}° &nbsp; &nbsp;
                          &#8595; {city.weather[1].mintempC}°
                        </p>
                      </p>
                    </Carousel.Caption>
                  </Carousel.Item>
                  <Carousel.Item>
                    <div id="img_carousel" className="d-block w-100"></div>
                    <Carousel.Caption>
                      <h3>{city.weather[2].date}</h3>
                      <img
                        id="img_carousel1"
                        src={city.weather[2].hourly[4].weatherIconUrl[0].value}
                        alt="weatherImg"
                      ></img>
                      <p>{city.weather[2].hourly[4].weatherDesc[0].value}</p>
                      <p>
                        <p>
                          {" "}
                          &#8593; {city.weather[2].maxtempC}° &nbsp; &nbsp;
                          &#8595; {city.weather[2].mintempC}°
                        </p>
                      </p>
                    </Carousel.Caption>
                  </Carousel.Item>
                  <Carousel.Item>
                    <div id="img_carousel" className="d-block w-100"></div>
                    <Carousel.Caption>
                      <h3>{city.weather[3].date}</h3>
                      <img
                        id="img_carousel1"
                        src={city.weather[3].hourly[4].weatherIconUrl[0].value}
                        alt="weatherImg"
                      ></img>
                      <p>{city.weather[3].hourly[4].weatherDesc[0].value}</p>
                      <p>
                        <p>
                          {" "}
                          &#8593; {city.weather[3].maxtempC}° &nbsp; &nbsp;
                          &#8595; {city.weather[3].mintempC}°
                        </p>
                      </p>
                    </Carousel.Caption>
                  </Carousel.Item>
                  <Carousel.Item>
                    <div id="img_carousel" className="d-block w-100"></div>
                    <Carousel.Caption>
                      <h3>{city.weather[4].date}</h3>
                      <img
                        id="img_carousel1"
                        src={city.weather[4].hourly[4].weatherIconUrl[0].value}
                        alt="weatherImg"
                      ></img>
                      <p>{city.weather[4].hourly[4].weatherDesc[0].value}</p>
                      <p>
                        <p>
                          {" "}
                          &#8593; {city.weather[4].maxtempC}° &nbsp; &nbsp;
                          &#8595; {city.weather[4].mintempC}°
                        </p>
                      </p>
                    </Carousel.Caption>
                  </Carousel.Item>
                </Carousel>
              </div>
            </div>
          ) : (
            <p>
              Oups, Nothing found for <span id="ser">{searchAll}</span>!
            </p>
          )}

          {}
        </ul>
      </div>
    </div>
  );
}
