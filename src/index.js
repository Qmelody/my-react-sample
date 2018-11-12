import React from "react";
import ReactDOM from "react-dom";
import Game from "./Game";
import "./index.css";
import Timer from "./Timer";
import Hello from "./Hello";


ReactDOM.render(
    <div>
        <div>
            <Game/>
        </div>
        <div className="timer">
            <Timer/>
        </div>
        <div>
            <Hello/>
        </div>
    </div>,
    document.getElementById('root')
);
