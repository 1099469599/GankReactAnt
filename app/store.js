import { createStore, applyMiddleware, combineReducers } from 'redux';
import thunk from 'redux-thunk';

// App Reducers
import getDataReducer from './reducers/get-data-reducer';

// Combine Reducers
var reducers = combineReducers({
    getDataReducer: getDataReducer
    // more if you want...
});

// Create Store
var store = createStore(
    reducers,
    applyMiddleware(thunk)
);

export default store;