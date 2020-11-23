import React, { useEffect } from "react";
import SmurfDetails from "./smurfDetails";
import { connect } from "react-redux";
import { getSmurfData } from "../reducer/actions/actions";
import "./smurfList.css";

const SmurfList = (props) => {
    useEffect(() => {
        props.getSmurfData();
    }, []);

    return (
        <>
        <div className="list">
        <h1>Smurf List</h1>
        {props.smurfs.map((smurf) => (
            <SmurfDetails key={smurf.id} smurf={smurf} />
        ))}
        </div>
        </>
    );
};

const mapStateToProps = (state) => {
    return {
        smurfs: state.smurfs,
        isLoading: state.isLoading,
        errors: state.errors,
    };
};

export default connect(mapStateToProps, { getSmurfData })(SmurfList)