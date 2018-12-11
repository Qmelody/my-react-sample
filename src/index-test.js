import React from "react";
import ReactDOM from "react-dom";
// import Timer from "./demo/Timer";
import "./index.css";
// import Parent from "./demo/Parent";
// import reducer from "./reducers";
import ReactTableDemo from "./demo/ReactTableDemo";
// import {createStore} from "redux";

// const store = createStore(reducer);

//- 渲染挂载组件
ReactDOM.render(
    <div>
        <div>
            {/*<Game/>*/}
        </div>
        <div>
            {/*<Timer/>*/}
            <ReactTableDemo/>
        </div>
    </div>,
    document.getElementById('root')
);