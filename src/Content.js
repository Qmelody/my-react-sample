import React from "react";
import {Route, Switch} from "react-router-dom";
import Timer from "./demo/Timer";
import NameForm from "./demo/NameForm";
import Game from "./demo/Game";

const Content = () => {
    return (
        <Switch>
            <Route path='/myReducer' component={Game}/>
            <Route path='/invoke' component={NameForm}/>
            <Route path='/timer' component={Timer}/>
            <Route path='/user' component={User}/>
        </Switch>
    );
};


const User = () => {
    return <h1>Hello world!</h1>
};

export default Content;