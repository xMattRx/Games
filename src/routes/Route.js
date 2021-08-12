import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import { Home } from "../pages/Home";
import { Game } from "../pages/Game";

export function Routes() {
    return (
        <Router>
            <Switch>
                <Route exact component={Home} path="/" />
                <Route component={Game} path="/game" />
            </Switch>
        </Router>
    );
}