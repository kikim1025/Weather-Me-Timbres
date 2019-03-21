import $ from 'axios';
import { GET_LOC } from '../constants/constants';


export function getLoc() {
    return function(dispatch) {
        return (
            navigator.geolocation.getCurrentPosition(
                function(pos) {
                    dispatch({ type: GET_LOC, 
                            lat: pos.coords.latitude,
                            lon: pos.coords.longitude,
                            weather: 'asdf'
                    });
                }
            )
        ); 
    };
};

// 
export function getWeather() {
    return function(dispatch) {

        return (
            $.get('')
            .then((res) => {
                
            })
        );    
    };
};