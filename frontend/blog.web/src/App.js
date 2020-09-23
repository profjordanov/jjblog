import React from "react";
import {BrowserRouter, Route, Switch} from "react-router-dom";
import ArticlesPage from "./components/articles/ArticlesPage";
import "react-toastify/dist/ReactToastify.css";

function App() {
    return (
        <div className="container-fluid">
            <BrowserRouter>
                <Switch>
                    <Route exact path="/" component={ArticlesPage}/>
                </Switch>
            </BrowserRouter>
        </div>
    );
}

export default App;
