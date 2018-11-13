import React from "react";
import ReactDOM from "react-dom";
import Timer from "./demo/Timer";
import "./index.css";

//- 渲染挂载组件
ReactDOM.render(
    <div>
        <div>
            {/*<Game/>*/}
        </div>
        <div>
            <Timer/>
        </div>
    </div>,
    document.getElementById('root')
);

//- 解除挂载，清除组件
// ReactDOM.unmountComponentAtNode(document.getElementById('root'));