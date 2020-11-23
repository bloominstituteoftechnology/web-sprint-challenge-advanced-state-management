import React, { useState } from "react";
import { connect } from "react-redux";
import { postSmurfData } from "../reducer/actions/actions"
import "./smurfForm.css";

export const SmurfForm = (props) => {
    const [smurf, setSmurf] = useState({
        name: "",
        age: "",
        height: "",
    });

    const inputHandler = (e) => {
        e.preventDefault();
        setSmurf({...smurf, [e.target.name]: e.target.value })
    }

    const  onSubmit = (e) => {
        e.preventDefault();
        props.postSmurfData(smurf);
        document.getElementById("smurfForm").reset();
    }

    return (
        <>
        <div className="container">
        <form id="smurfForm" onSubmit={onSubmit}>
            <input
                name="name"
                type="text"
                placeholder="Smurf"
                value={props.name}
                onChange={inputHandler}
            />
            <input
                name="age"
                type="text"
                placeholder="Age"
                value={props.name}
                onChange={inputHandler}
            />
            <input
                name="height"
                type="text"
                placeholder="Height"
                value={props.name}
                onChange={inputHandler}
            />
            <button>Submit</button>
        </form>
        </div>
        </>
    );
};

const mapStateToProps = (state) => {
    return {
        smurfs: state.smurfs,
        errors: state.errors,
    };
};

export default connect(mapStateToProps, {postSmurfData})(SmurfForm)