import { GET_LOC} from '../constants/constants';

const initState = {};

function reducer(state = initState, action) {
    switch (action.type) {
        case GET_LOC:
            return Object.assign({}, state, {
                lat: action.lat,
                lon: action.lon
            });

        default: 
            return state;
    };
};

export default reducer;