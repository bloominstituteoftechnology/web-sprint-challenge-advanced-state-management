import React, { useState } from "react";
import { connect } from "react-redux";
import { getSmurfs } from "../actions/viewSmurfs";
import { SmurfCard } from "./SmurfCard";
import { addSmurf } from "../actions/addSmurf";

const Smurfs = (props) => {
  console.log("props from Smurfs", props);
  const [newSmurf, setNewSmurf] = useState("");

  const addNewSmurf = (e) => {
    e.preventDefault();
    console.log("fired");
    props.addSmurf(newSmurf);
    setNewSmurf({
      name: "",
      age: "",
      height: "",
    });
  };

  const fetchSmurfs = (e) => {
    e.preventDefault();
    props.getSmurfs();
  };

  const onChangeNumber = (e) => {
    e.persist();
    console.log("number value", typeof e.target.value);
    setNewSmurf({ ...newSmurf, age: Number(e.target.value) });
  };

  const onChange = (e) => {
    e.persist();
    setNewSmurf({ ...newSmurf, [e.target.name]: e.target.value });
    console.log("new smurf", newSmurf);
  };

  return (
    <div className="smurfslist">
      <h2 className="addSmurf">Add another Smurf to the List</h2>
      <form>
        <input
          name="name"
          type="text"
          placeholder="Smurf's Name"
          value={newSmurf.name}
          onChange={onChange}
        />
        <input
          name="age"
          type="number"
          placeholder="Smurf's Age"
          value={newSmurf.age}
          onChange={onChangeNumber}
        />
        <input
          name="height"
          type="text"
          placeholder="Smurf's Height"
          value={newSmurf.height}
          onChange={onChange}
        />
        <button onClick={addNewSmurf} type="submit">
          Add a smurf
        </button>
      </form>

      <h2>See the Smurfs</h2>

      <button onClick={fetchSmurfs} type="submit">
        Show me the Smurfs!
      </button>

      <div>
        {props.smurfs.map((smurf) => (
          <SmurfCard key={smurf.id} smurf={smurf} />
        ))}
      </div>
    </div>
  );
};

const mapStateToProps = (state) => ({
  smurfs: state.smurfs,
  error: state.error,
});

export default connect(mapStateToProps, { getSmurfs, addSmurf })(Smurfs);
