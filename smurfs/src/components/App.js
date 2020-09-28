import React, { useEffect, useState } from "react";
import axios from "axios";
import "./App.css";
import { connect } from "react-redux";
import { getData } from "../actions/index";
// import Display from "./Display";

const App = (props) => {
  const [smurf, setSmurf] = useState({ name: "", age: "", height: "" });
  const [post, setPost] = useState();

  useEffect(() => {
    props.getData();
  }, []);

  const handleChanges = (e) => {
    setSmurf({ ...smurf, [e.target.name]: e.target.value });
  };

  const formSubmit = (e) => {
    e.preventDefault();
    axios
      .post("http://localhost:3333/smurfs", smurf)
      .then((res) => {
        console.log(res.data);
        setPost(res.data);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  return (
    <div className="App">
      <div className="Form">
        <form onSubmit={formSubmit}>
          <label>New Smurf:</label>
          <input
            name="name"
            id="name"
            value={smurf.name}
            type="text"
            placeholder="name"
            onChange={handleChanges}
          />
          <input
            name="age"
            id="age"
            value={smurf.age}
            type="text"
            placeholder="age"
            onChange={handleChanges}
          />
          <input
            name="height"
            id="height"
            value={smurf.height}
            type="text"
            placeholder="height"
            onChange={handleChanges}
          />
          <button>Submit</button>
        </form>
        <div className="display"></div>
      </div>

      <pre>{JSON.stringify(post, null, 2)}</pre>
      {/* <Display smurf={smurf} /> */}
    </div>
  );
};

const mapStateToProps = (state) => {
  // console.log(state.smurfData);
  return {
    smurfData: state.smurfData,
    is_loading_data: state.is_loading_data,
    error: state.error,
  };
};
export default connect(mapStateToProps, { getData })(App);

/* <div className="display">
{smurf.map((smurfs) => {
  <div>
    <h1>{smurfs}</h1>
    {/* <h2>{smurfs.age}</h2>
    <h2>{smurfs.height}</h2> */
// })}
// </div> */}

// {
//   const handleChanges = (e) => {
//     const [smurf, setSmurf] = useState();
//     setSmurf({ ...smurf, [e.target.name]: e.target.value });
//   };

//   const formSubmit = (e) => {
//     e.preventDefault();
//     axios
//       .post("http://localhost:3333/smurfs", smurf)
//       .then((res) => {
//         console.log(res.data);
//       })
//       .catch((err) => {
//         console.log(err);
//       });
//   };
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

// const testData = { name: "Rob", age: 2, height: "massive" }
