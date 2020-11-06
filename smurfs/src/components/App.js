import React from 'react';
import { BrowserRouter as Router, Route, Switch, Link } from 'react-router-dom';
import './App.css';
import Smurfs from "./Smurfs";
import AddSmurfs from "./AddSmurfs";

function App() {
  return (
    <Router>
      <div>
        <ul className='navigation'>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/addsmurfs">Add New Smurfs</Link>
          </li>
        </ul>
        <Route exact path="/" component={Smurfs} />
        <Route path="/addsmurfs" component={AddSmurfs} />

      </div>
      </Router>
  );
}

export default App;
