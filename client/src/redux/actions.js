import $ from 'axios';
import { GET_LOC} from '../constants/constants';


export function getWeather() {
    navigator.geolocation.getCurrentPosition(
        function(pos) {
            console.log(pos);
        }
    );
};

// 
export function getWeather() {
    return function(dispatch) {

        return (
            $.get('')
            .then((res) => {
                dispatch({ type: GET_DATA, payload: res.data.data });
            })
        );    
    };
};