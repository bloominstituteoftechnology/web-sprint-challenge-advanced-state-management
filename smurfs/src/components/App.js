import React from "react";

import SmurfInfo from "./SmurfInfo";
import AddSmurf from "./AddSmurf";

function App() {
  return (
    <div className="App">
      <h1>SMURFS! W/Redux</h1>
      <div>Welcome to your state management version of Smurfs!</div>
      <div>Start inside of your `src/index.js` file!</div>
      <div>Have fun!</div>

      <AddSmurf />
      <SmurfInfo />
    </div>
  );
}

export default App;
