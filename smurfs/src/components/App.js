import React, { useEffect,useState } from 'react';
import { fetchData } from "./actions";
import { addSmurf } from "./actions";
import './App.css';
import { connect } from "react-redux";

const App = (props) => {
  const [ form , setForm ] = useState({
    name: "",
    height: "",
    age: ""
  })
  const handleSubmit = e => {
    e.preventDefault();
    props.addSmurf(form)
  }
  const handleChange = e => {
    const newFormData = {
      ...form, [e.target.name] : e.target.value
    }
    setForm(newFormData);
    console.log(form)
  }
  useEffect(() => {
    props.fetchData();
  },[props.smurfs]);
  return (
    <div>
      <header>
      <h1>SMURFS! W/Redux</h1>
      </header>
      <main>
        <h2>SMURFS!!</h2>
          {props.smurfs.length > 0 && 
          props.smurfs.map((smurfs, i) => (
            <div>
              <h2>Name:{props.smurfs[i].name} </h2> 
            <h3>height:{props.smurfs[i].height}</h3>
            <h4>age:{props.smurfs[i].age}</h4>
            </div>
          ))}
          <form onSubmit={handleSubmit}>
      <label htmlFor= "name">
        Smurf's Name:
        <input
            name = "name"
            type = "text"
            value = {form.name}
            onChange = {handleChange}
        />
      </label>
      <label htmlFor= "height">
        Smurf's Height:
        <input
            name = "height"
            type = "text"
            value = {form.height}
            onChange = {handleChange}
        />
      </label>
      <label htmlFor= "name">
        Smurf's Age:
        <input
            name = "age"
            type = "text"
            value = {form.age}
            onChange = {handleChange}
        />
      </label>
      <input type="submit" value="Submit" />
    </form>
      </main>
    </div>
  );
}
const mapStateToProps = (state) => {
  return {
    smurf:state.smurf,
    smurfs:state.smurfs
  }
}

export default connect(mapStateToProps, { fetchData, addSmurf })(App);

/*
<div>
            <h2>Name:{props.smurf.name} </h2> 
            <h3>height:{props.smurf.height}</h3>
            <h4>age:{props.smurf.age}</h4>
          </div>
          */