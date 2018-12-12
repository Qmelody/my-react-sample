import React from "react";
import ReactDOM from "react-dom";
// import Timer from "./demo/Timer";
import "./index.css";
import Game from "./demo/Game";
import App from "./App";
// import {createStore} from "redux";

// const store = createStore(reducer);

//- 渲染挂载组件
ReactDOM.render(
    <div>
        <div>
            <Game/>
        </div>
        <br/>
        <div>
            {/*<Timer/>*/}
            <App/>
        </div>
    </div>,
    document.getElementById('root')
);