import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./components/App";
import store from './redux/store'
import { Provider } from 'react-redux'
import 'bootstrap/dist/css/bootstrap.min.css';

import { BrowserRouter as Router } from 'react-router-dom'


ReactDOM.render(<Provider store={store}><Router><App /></Router></Provider>, document.getElementById("root"));
