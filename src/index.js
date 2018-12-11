import React from 'react';
import {render} from 'react-dom';
import {Provider} from "react-redux";
import store from './store';
import "./index.css";
import App from "./App";

render(
    <Provider store={store}>
        <div>
            <h2 align="center">Redux试水</h2>
            <App/>
        </div>
    </Provider>,
    document.getElementById('root')
);