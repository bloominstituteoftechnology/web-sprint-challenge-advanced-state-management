import React, { useState } from "react";
import { postNewSmurf } from "../Actions/Actions";
import { connect } from "react-redux";
import SmurfList from "./SmurfList";

const SmurfForm = ({ postNewSmurf }) => {
  const newSmurt = {
    name: "",
    age: "",
    height: "",
    id: "",
  };

  const [smurf, setSmurf] = useState(newSmurt);

  const handleChange = (e) => {
    setSmurf({
      ...smurf,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    postNewSmurf(smurf);
    setSmurf({
      name: "",
      age: "",
      height: "",
      id: "",
      url: "",
    });
  };

  return (
    <div>
      <h1>Please Add Smurf Members To Grow Our Village Family</h1>
      <div>
        <form onSubmit={handleSubmit}>
          <div>
            <input
              type="text"
              onChange={handleChange}
              name="name"
              placeholder="Enter Name"
              value={smurf.name}
            />

            <input
              type="text"
              onChange={handleChange}
              name="age"
              placeholder="Enter Age"
              value={smurf.age}
            />

            <input
              type="text"
              onChange={handleChange}
              name="height"
              placeholder="Enter Height"
              value={smurf.height}
            />

            <button type="submit">Add Smurf</button>
          </div>
        </form>
        <SmurfList />
      </div>
    </div>
  );
};

const mapStateToProps = (state) => {
  return {
    smurfs: state.smurfs,
  };
};

const mapDispatchToProps = { postNewSmurf };

export default connect(mapStateToProps, mapDispatchToProps)(SmurfForm);

//Task List:
//1. Add in all necessary import components and library methods.
//2. Connect all needed redux state props and action functions to the component before exporting.
//3. Add state holding name, position, nickname and description to component.
//4. Build form DOM to include inputs for name, position and description of the component.
//      - an array of smurfs
//      - a boolean indicating if the app is loading
//      - error text
//      - MAKE SURE TO CORRECTLY CONNECT LABELS TO YOUR FORM INPUTS. USE THE PATERN OF SHOWN FOR NAME.
//5. Build eventhandler and listener needed to change the state.
//6. Build eventhandler and listener needed to submit a new smurf and dispatch it's assosated action.
//7. Ensure that the included alert code only displays when error text is passed in from redux.
//4. DO NOT DELETE THE data-testid FIELD FROM THE ERROR ALERT! This is used for sprint grading.
//8. Style as necessary.
