import React from 'react';
import ReactDOM from 'react-dom';
import {Provider as ReduxProvider} from "react-redux";
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';
import configureStore from "./redux/configureStore";
import "bootstrap/dist/css/bootstrap.min.css";

const store = configureStore();

ReactDOM.render(
    <ReduxProvider store={store}>
        <React.StrictMode>
            <App/>
        </React.StrictMode>
    </ReduxProvider>,
    document.getElementById('root')
);

serviceWorker.unregister();
