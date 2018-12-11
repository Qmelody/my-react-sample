import {createStore, applyMiddleware} from 'redux';
import reducer from '../reducers';
import { logger } from 'redux-logger';

const initialState = {
    "myReducer": {
        name: "init"
    }
};

const store = createStore(
    reducer,
    initialState,
    applyMiddleware(logger)
);

export default store;