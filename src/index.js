import React from "react";
import ReactDOM from "react-dom";
import Game from "./Game";
import "./index.css";
import Timer from "./Timer";


ReactDOM.render(
    <div>
        <div>
            <Game/>
        </div>
        <div className="timer">
            <Timer/>
        </div>
        <div>

        </div>
    </div>,
    document.getElementById('root')
);
