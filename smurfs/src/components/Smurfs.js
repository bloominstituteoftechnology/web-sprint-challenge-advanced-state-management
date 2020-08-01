import React, { useState, useEffect } from "react";
// import axios from "axios";
import { connect } from "react-redux";
import { addSmurf } from "../actions/index";

const Smurfs = (props) => {
  // const [smurfs, addSmurf] = useState([{ name: "", age: "", heigth: "" }]);

  // useEffect(() => {
  //   axios.get("http://localhost:3333/smurfs").then((res) => {
  //     res.data.map((smurf) => {
  //       addSmurf([
  //         ...smurfs,
  //         {
  //           name: smurf.name,
  //           age: smurf.age,
  //           height: smurf.height,
  //         },
  //       ]);
  //     });
  //   });
  // }, []);

  return (
    <div>
      <p>hello</p>

      <form>
        <input />
      </form>

      <p></p>
    </div>
  );
};

const mapStateToProps = (state) => {
  console.log(state);
  return {
    name: state.name,
    age: state.age,
    height: state.height,
  };
};

export default connect(mapStateToProps, { addSmurf })(Smurfs);
