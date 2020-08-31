import React, { useState } from "react";
import { updateSmurfs } from "../actions";
import { connect } from "react-redux";
const SmurfsForm = (props) => {
  const [smurfData, setNewSmurfData] = useState({
    name: "",
    age: "",
    height: "",
  });

  const handleChange = (e) => {
    setNewSmurfData({ ...smurfData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // send new smurfData to db
    props.updateSmurfs(smurfData);

    setNewSmurfData({ name: "", age: "", height: "" });
  };
  return (
    <div>
      <form onSubmit={handleSubmit}>
        <label>name</label>
        <input
          name="name"
          type="type"
          value={smurfData.name}
          onChange={handleChange}
          placeholder="placeholder"
        />
        <label>age</label>
        <input
          name="age"
          type="type"
          value={smurfData.age}
          onChange={handleChange}
          placeholder="placeholder"
        />
        <label>height</label>
        <input
          name="height"
          type="type"
          value={smurfData.height}
          onChange={handleChange}
          placeholder="placeholder"
        />
        <button>Submit</button>
      </form>
    </div>
  );
};

function mapStateToProps(state) {
  return { smurfs: state.smr.smurfs };
}

export default connect(mapStateToProps, { updateSmurfs })(SmurfsForm);
