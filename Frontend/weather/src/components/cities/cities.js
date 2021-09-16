import { useState, useEffect } from "react";
import axios from "axios";
import 'bootstrap/dist/css/bootstrap.min.css';
import { Carousel } from 'react-bootstrap';
import "./cities.css"

export default function Cities(){
    const [ip, setIp] = useState("");
    const [error, setError] = useState(null);
    const [city, setCity] = useState("");
    const [searchCii, setSearchCii] = useState("");
    const [country, setCounrty] = useState("");
    const [searchAll, setSearchAll] = useState("");

  
    /*var requestOptions = {
              method: 'GET',
              redirect: 'follow'
              };*/
  
const getCity = () =>{

     
        axios
          .post("http://api.worldweatheronline.com/premium/v1/weather.ashx?key=17fcdb6758684e6785b114437211609&q="+searchAll+"&format=json&num_of_days=5" /*, requestOptions*/, {
            
          })
          // .then(response => response.text())
          // .then(result => console.log(result))
          // .catch(error => console.log('error', error));
          .then(
            (result) => {
              setCity(result.data);
            },
            // Remarque : il faut gérer les erreurs ici plutôt que dans
            // un bloc catch() afin que nous n’avalions pas les exceptions
            // dues à de véritables bugs dans les composants.
            (error) => {
              setError(error);
              console.log(error);
            }
            );
        }
    console.log(searchAll);
    
    return(
        <div>

        <input
        type="text"
        id="name"
        required
        size="10"
        className="inT"
        placeholder="Search for cities"
        onChange={(e) => {setSearchAll(e.target.value)}}
        />
        <br></br>
        <button onClick={getCity}>Search</button>
<div class="main">
            <ul class="cards">
            {Object.keys(city).filter((item, i) => {
                  if (searchAll === "") {
                    return 
                  } else if (
                    (searchAll !== "" &&
                      city[item].request[0].query !== undefined  || typeof searchAll === ''
                        .toLowerCase()
                        .includes(searchAll.toLowerCase()))
                        ) {
                            
                        }
                    })}
      
                {Object.keys(city).map((item, i) => (
                   
                        (searchAll == "") ? (
                            <h2>Oups, You need to type something !</h2>
                        ): (
                    <div>
                      <div key={i}> 
          
                        <span className="input-label">
                          {" "}
                          Weather:{" "}
                          <br></br>
                          <h2>{city[item].request[0].query}</h2>
                              <img className="icn-1"
                              src={city[item].current_condition[0].weatherIconUrl[0].value}
                              ></img>
                          <br></br>
                          {city[item].current_condition[0].weatherDesc[0].value}
                        </span>
                         <p> &#8593; {city[item].weather[0].maxtempC}° &nbsp; &nbsp; &#8595; {city[item].weather[0].mintempC}°</p>
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
                              <h3>{city[item].weather[1].date}</h3>
                              <img id="img_carousel1"
                              src={city[item].weather[1].hourly[4].weatherIconUrl[0].value}
                          ></img>
                              <p>
                              {city[item].weather[1].hourly[4].weatherDesc[0].value}
                              </p>
                              <p>
                              <p> &#8593; {city[item].weather[1].maxtempC}° &nbsp; &nbsp; &#8595; {city[item].weather[1].mintempC}°</p>
                              </p>
                            </Carousel.Caption>
                          </Carousel.Item>
                          <Carousel.Item>
                          <div id="img_carousel"
                              className="d-block w-100"
                              
                              
                              ></div>
                            <Carousel.Caption>
                              <h3>{city[item].weather[2].date}</h3>
                              <img id="img_carousel1"
                              src={city[item].weather[2].hourly[4].weatherIconUrl[0].value}
                              ></img>
                              <p>
                              {city[item].weather[2].hourly[4].weatherDesc[0].value}
                              </p>
                              <p>
                              <p> &#8593; {city[item].weather[2].maxtempC}° &nbsp; &nbsp; &#8595; {city[item].weather[2].mintempC}°</p>
                              </p>
                            </Carousel.Caption>
                          </Carousel.Item>
                          <Carousel.Item>
                          <div id="img_carousel"
                              className="d-block w-100"
                              
                              
                            ></div>
                            <Carousel.Caption>
                              <h3>{city[item].weather[3].date}</h3>
                              <img id="img_carousel1"
                              src={city[item].weather[3].hourly[4].weatherIconUrl[0].value}
                              ></img>
                              <p>
                              {city[item].weather[3].hourly[4].weatherDesc[0].value}
                              </p>
                              <p>
                              <p> &#8593; {city[item].weather[3].maxtempC}° &nbsp; &nbsp; &#8595; {city[item].weather[3].mintempC}°</p>
                              </p>
                            </Carousel.Caption>
                          </Carousel.Item>
                          <Carousel.Item>
                          <div id="img_carousel"
                              className="d-block w-100"
                              
                              
                              ></div>
                            <Carousel.Caption>
                              <h3>{city[item].weather[4].date}</h3>
                              <img id="img_carousel1"
                              src={city[item].weather[4].hourly[4].weatherIconUrl[0].value}
                              ></img>
                              <p>
                              {city[item].weather[4].hourly[4].weatherDesc[0].value}
                              </p>
                              <p>
                              <p> &#8593; {city[item].weather[4].maxtempC}° &nbsp; &nbsp; &#8595; {city[item].weather[4].mintempC}°</p>
                              </p>
                            </Carousel.Caption>
                          </Carousel.Item>
                        </Carousel>
                      </div>
                    </div>)
                    
                ))}
    
          
      </ul>
          </div>
        </div>
    )
}