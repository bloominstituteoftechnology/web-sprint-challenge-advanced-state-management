import React, { useState } from "react";
import { connect } from "react-redux";
import { getData, postData } from "../actions";

const SmurfForm = props => {

  const [name, setName] = useState("");
  const handleNameChange = e => {
    e.preventDefault();
    setName(e.target.value);
  };
  const [age, setAge] = useState(null);
  const handleAgeChange = e => {
    e.preventDefault();
    setAge(e.target.value);
  };
  const [height, setHeight] = useState("");
  const handleHeightChange = e => {
    e.preventDefault();
    setHeight(e.target.value);
  };

  const handleGetData = e => {
    e.preventDefault();
    props.getData();
  };

  const handleSubmit = e => {
    e.preventDefault();
    props.postData({ name: name, age: age, height: height, id: Date.now() });
    props.getData();
  };
  return (
    <>
      <button onClick={handleGetData}>Get All Smurfs</button>
      <form>
        <input
          name="name"
          type="text"
          placeholder="Name"
          value={props.name}
          onChange={handleNameChange}
        />
        <input
          name="age"
          type="tel"
          placeholder="age"
          value={props.age}
          onChange={handleAgeChange}
        />
        <input
          name="height"
          type="text"
          placeholder="height"
          value={props.height}
          onChange={handleHeightChange}
        />
        <button onClick={handleSubmit}>Add a Smurf</button>
      </form>
    </>
  );
};

const mapStateToProps = state => {
  return {
    smurfList: state.smurfList,
    isFetchingData: state.isFetchingData
  };
};

export default connect(mapStateToProps, { getData, postData })(SmurfForm);