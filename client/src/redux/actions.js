import $ from 'axios';
import { API_KEY, GET_DATA } from '../constants/constants';

// retrieve client location using GeoLocation API, then request weather information from OpenWeatherMap API
export function getData() {
    return function(dispatch) {
        return (
            navigator.geolocation.getCurrentPosition(
                function(pos) {
                    let lat = pos.coords.latitude;
                    let lon = pos.coords.longitude;
                    $.get(`https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&APPID=${API_KEY}&units=imperial`)
                    .then((res) => {
                        console.log(res.data);
                        dispatch({ type: GET_DATA, 
                            lat: Number(lat.toFixed(2)),
                            lon: Number(lon.toFixed(2)),
                            temp: res.data.main.temp,
                            name: res.data.name,
                            weather: {
                                main: res.data.weather[0].main,
                                desc: res.data.weather[0].description                      
                            }

                        });
                    });
                }
            )
        ); 
    };
};