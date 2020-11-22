import React, {useState} from "react";
// import { Switch, Route } from 'react-router-dom'

import { connect } from 'react-redux';
import { Button } from 'react-bootstrap';
import "./App.css";
import SmurfList from "./SmurfList";
import { addSmurf } from '../store/actions'

const App = (props) => {

  const [newSmurf, setNewSmurf] = useState([{
    name: '',
    age: 0,
    height: '',
    
  }])
  
  const handleChange = (e) => {
    const value = e.target.name === "age, height" ? Number(e.target.value): e.target.value;
    setNewSmurf({...newSmurf, [e.target.name]: value})
  }

  const handleClick = (e) => {
    e.preventDefault();
    props.addSmurf(newSmurf);
    setNewSmurf({
      name: '',
      age: null,
      height: null,
    })
  }

  return (
    <div className="App">
      
      <h1>SMURFS!</h1>
      <h2>Click below to see the list of Smurfs Already in the Database:</h2>
      <SmurfList /> 
      <h2>Fill out this form to add a new Smurf!</h2>
      <form>
        
        <label htmlFor="name"/>Name
        <input 
        id='name'
        name='name'
        placeholder="Enter Name Here"
        value={newSmurf.name}
        onChange={handleChange}
        />
        <br/>
        <br/>
        <label htmlFor="age"/>Age
        <input 
        id='age'
        name='age'
        placeholder="Enter Age Here"
        value={newSmurf.age}
        onChange={handleChange}
        />
        <br/>
        <br/>
        <label htmlFor="height"/>Height in cm
        <input 
        id='height'
        name='height'
        placeholder="Enter Height Here"
        value={newSmurf.height}
        onChange={handleChange}
        />
        <br/>
        <br/>
        <button onClick={handleClick}>Click Here to Add Your Smurf</button>
      </form>
    </div>
  );
};

const mapStateToProps = ({SR}) => {
  return {
    smurfs: SR.smurfs,
    isLoading: SR.isLoading,
    error: SR.error,
  }
}

export default connect(mapStateToProps, {addSmurf})(App);
