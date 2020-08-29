import React from "react";
import "./App.css";

import SmurfForm from "./SmurfForm";
import SmurfList from "./SmurfList";

const App = () => {
  return (
    <div className="App">
      <h2>Smurf Village</h2>
      <SmurfForm />
      <SmurfList />
    </div>
  );
};

export default App;
