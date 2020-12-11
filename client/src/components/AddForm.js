import React, { useEffect } from "react";
import { makingSmurf } from "../actions";
import { connect } from "react-redux";

const AddForm = (props) => {
  const formValues = props.smurf;
  const [form, setForm] = useState(formValues);

  const handleSubmit = (e) => {
    e.preventDefault();
    props.makingSmurf(form);
    setForm(formValues);
  };
  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <input
          type='text'
          value={form.name}
          onChange={handleChange}
          name='name'
          placeholder='Name'
        ></input>
        <input
          type='text'
          value={form.age}
          name='age'
          onChange={handleChange}
          placeholder='Age'
        ></input>
        <input
          type='text'
          value={form.height}
          name='height'
          onChange={handleChange}
          placeholder='Height'
        ></input>
        <div
          data-testid='errorAlert'
          className='alert alert-danger'
          role='alert'
        >
          Error:{" "}
        </div>
        <button>SUBMIT</button>
      </form>
    </div>
  );
};

const mapStateToProps = (state) => {
  return {
    smurfs: state.smurfs,
    smurf: state.smurf,
    error: state.errror,
  };
};

export default connect(mapStateToProps, { makingSmurf })(AddForm);

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
