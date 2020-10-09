// import React, { Component } from "react";
// import "./App.css";

// class App extends Component {
//   render() {
//     return (
//       <div className="App">
//         <h1>SMURFS! W/Redux</h1>
//         <div>Welcome to your state management version of Smurfs!</div>
//         <div>Start inside of your `src/index.js` file!</div>
//         <div>Have fun!</div>
//       </div>
//     );
//   }
// }

// export default App;

import React from "react";
import SmurfList from "./SmurfList";
import SmurfForm from "./SmurfForm";
import { getSmurf } from "../actions/index";
import styled from 'styled-components';

const Wrapper = styled.div`
/* styles */
  margin: 40px;
  border: 10px white;
  background: papayawhip;
  color: #4f4f4f;
  `;

const Header = styled.h1`
  font-size: 4rem;
  text-align: center;
  color: white;
  `;

export default function App(props) {
  const { getSmurf } = props;
  
  return (
    <Wrapper>
      <Header>Welcome to Smurfville</Header>
      <SmurfList/>
      {props.smurf.map((smurf) => (
        <Header key={smurf.id}>{smurf.name}</Header>
      ))}
      <SmurfForm/>
    </Wrapper>
  );

      }
