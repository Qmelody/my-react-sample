import React from "react";
import {NavLink} from "react-router-dom";
import "./index.css";

const Menu = () => {
    return (
        <div>
            <h2>HashRouter只能有一个子元素</h2>
            <p>NavLink添加replace属性可以解决重复点击链接报错：Warning: You cannot PUSH the same path using hash history</p>

            <ul id="menu">
                <li><NavLink to="/myReducer" replace >棋子游戏Reducer</NavLink></li>
                <li><NavLink to="/invoke" replace >父组件调用子组件</NavLink></li>
                <li><NavLink to="/timer" replace >定时器Timer</NavLink></li>
                <li><NavLink to="/user" replace >用户管理User</NavLink></li>
            </ul>
            <div className='clear'><br/></div>
        </div>
    );
};

export default Menu;