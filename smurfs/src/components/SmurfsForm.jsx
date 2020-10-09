import React, { useState } from 'react'
import { connect } from 'react-redux';
import { postSmurfs } from '../actions/index'

const SmurfsForm = (props) => {


    const [smurf, setSmurf ] = useState({
        name: "",
        age: "",
        height: ""
    })


   const submitHandler = (e) => {
    e.preventDefault();
    props.postSmurfs(smurf);
    document.getElementById("smurfForm").reset();
  };

  const inputHandler = (e) => {
    e.preventDefault();
    setSmurf({ ...smurf, [e.target.name]: e.target.value });
  };


    return (
        <div>
        <form onSubmit={submitHandler} id="smurfForm">
          <label htmlFor="name">
            Name:
            <input
              type="text"
              name="name"
              value={props.name}
              placeholder="name"
              id="name"
              onChange={inputHandler}
            />
          </label>
          <label htmlFor="age">
            Age:
            <input
              type="text"
              name="age"
              value={props.age}
              placeholder="age"
              id="age"
              onChange={inputHandler}
            />
          </label>
          <label htmlFor="height">
            Height:
            <input
              type="text"
              name="height"
              value={props.height}
              placeholder="height"
              id="height"
              onChange={inputHandler}
            />
          </label>
          <button>Add a Smurf</button>
        </form>
      </div>
    );
  };
  
 
  


const mapStateToProps = (state) => {
    return{
        smurfs: state.smurfs,
        isPosting: state.isPosting,
        error: state.error
    }
}

export default connect(mapStateToProps, { postSmurfs })(SmurfsForm)