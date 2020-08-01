import React from "react";
import "./App.css";
import SmurfsList from './SmurfsList';
import SmurfsForm from './SmurfsForm';

function App() {
    return (
      <div className="App">
        <h1>Welcome to the Smurf Village!</h1>
        <SmurfsForm/>
        <SmurfsList/>
      </div>
    );
}

export default App;
