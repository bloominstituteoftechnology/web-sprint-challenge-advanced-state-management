import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./components/App";
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import reducers from './reducers';
import 'bootstrap/dist/css/bootstrap.min.css';


const store = createStore(reducers, applyMiddleware(thunk)) // sdh

ReactDOM.render(
    <Provider store={store}> {/* sdh  */}
        <App />,
    </Provider>,    
document.getElementById("root")
);
