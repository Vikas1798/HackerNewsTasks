import React from "react";
import { Switch, Route } from "react-router-dom";
import HackerNews from "../Pages/HackerNews";

const Router = () => (
    <div>
        <Switch>
            <Route exact path="/" component={HackerNews} />
        </Switch>
    </div>
);

export default Router;