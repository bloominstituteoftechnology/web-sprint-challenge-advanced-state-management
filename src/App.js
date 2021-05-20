import React, { Component, useState } from "react";
import SmurfContext from "./contexts/SmurfContext";

import AddForm from "./components/AddForm";
import SmurfList from "./components/SmurfList";
import Header from "./components/Header";

import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";

export default function App() {
  const [smurfFamily] = useState(smurf);
}

return (
  <div className="App">
    <Header />

    <main>
      <SmurfList />
      <AddForm />
    </main>
  </div>
);

<SmurfContext.Provider value={smurfFamily}>
  {smurfFamily && <SmurfList />}
</SmurfContext.Provider>;

//Task List:
//1. Connect the fetchSmurfs actions to the App component.
//2. Call the fetchSmurfs action when the component first loads.
