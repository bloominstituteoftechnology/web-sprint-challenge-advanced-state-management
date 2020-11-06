import React from "react";
import SmurfForm from './smurfForm';
import SmurfsList from './smurfsList';
import "./App.css";


const App = () => {
  return (
    <div className="App">
      <h1>SMURFS!</h1>
      <SmurfForm/>
      <SmurfsList/>
    </div>
  );
}

export default App;
