import React from "react";
import "./App.css";
import SmurfsList from './SmurfsList'
import SmurfsForm from './SmurfsForm'

function App () {
  
    return (
      <div className="App">
        <h1>SMURFS! 2.0 W/ Redux</h1>
        <div>Welcome to your state management version of Smurfs!</div>
        
        <SmurfsList/>
        <SmurfsForm/>

       
      </div>
    );
  }

export default App;


