import $ from 'axios';
import { API_KEY, GET_DATA } from '../constants/constants';

export function getData() {
    return function(dispatch) {
        return (
            navigator.geolocation.getCurrentPosition(
                function(pos) {
                    let lat = pos.coords.latitude;
                    let lon = pos.coords.longitude;
                    console.log(lat, lon);
                    $.get(`https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&APPID=${API_KEY}`)
                    .then((res) => {
                        console.log(res.data);
                        dispatch({ type: GET_DATA, 
                            lat: lat,
                            lon: lon,
                            weather: res.data.weather[0].description
                        });
                    });
                }
            )
        ); 
    };
};