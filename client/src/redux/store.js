import { createStore, applyMiddleware} from 'redux';
import thunk from 'redux-thunk';
import reducers from './reducers';

// create redux store and apply middleware
const store = createStore(
    reducers,
    applyMiddleware(thunk)
);

export default store;