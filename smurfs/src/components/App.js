import React, { useEffect } from "react";
import axios from "axios";
import "./App.css";
import { connect } from "react-redux";
import { getData } from "../actions/index";

const App = (props) => {
  useEffect(() => {
    props.getData();
  }, []);

  return (
    <div className="App">
      <form>
        <label>
          New Smurf:
          <input type="text" placeholder="name" />
          <input type="text" placeholder="age" />
          <input type="text" placeholder="height" />
          <button>Submit</button>
        </label>
      </form>
      <div className="display"></div>
    </div>
  );
};

const testData = { name: "Rob", age: 2, height: "massive" };

// const formSubmit = (e) => {
//   e.preventDefault();
//   axios
//     .post("http://localhost:3333/smurfs", testData)
//     .then((res) => {
//       console.log(res.data);
//     })
//     .catch((err) => {
//       console.log(err);
//     });
// };

const mapStateToProps = (state) => {
  return {
    smurfData: state.smurfData,
    is_loading_data: state.is_loading_data,
    error: state.error,
  };
};

export default connect(mapStateToProps, { getData })(App);

{
  /* <h1>{props.smurfData.name}</h1>
      {props.is_loading_data ? (
        <div> Loading... </div>
      ) : props.error ? (
        <div>{props.error} </div>
      ) : (
        <>
          <p>Age:{props.smurfData.age}</p>
          <p>{props.smurfData.height}</p>
        </>
      )} */
}
