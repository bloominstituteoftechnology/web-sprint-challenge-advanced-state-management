import React from "react";

import SmurfInfo from "./SmurfInfo";
import AddSmurf from "./AddSmurf";

function App() {
  return (
    <div className="App">
      <div class="mt-10 mx-auto max-w-screen-xl px-4 sm:px-6 md:mt-16 lg:mt-20">
        <div class="text-center">
          <h2 class="text-4xl tracking-tight leading-10 font-extrabold text-gray-900 sm:text-5xl sm:leading-none md:text-6xl">
            Welcome to Smurf Central!
          </h2>
        </div>
      </div>
      <AddSmurf />
      <SmurfInfo />
    </div>
  );
}

export default App;
