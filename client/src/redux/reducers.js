import { GET_DATA} from '../constants/constants';

const initState = {};

function reducer(state = initState, action) {
    switch (action.type) {
        case GET_DATA:
            return Object.assign({}, state, {
                lat: action.lat,
                lon: action.lon,
                temp: action.temp,
                name: action.name,
                weather: action.weather
            });

        default: 
            return state;
    };
};

export default reducer;