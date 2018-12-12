import React from 'react';
import {render} from 'react-dom';
import {Provider} from "react-redux";
import store from './store';
import "./index.css";
import {HashRouter} from "react-router-dom";
import Application from "./Application";

render(
    <Provider store={store}>
        <HashRouter>
            <Application/>
        </HashRouter>
    </Provider>,
    document.getElementById('root')
);