import React, { useEffect } from "react";
import { connect } from "react-redux";
import SmurfDisplay from "./SmurfDisplay";
import { getSmurfs } from "../actions";

const Smurf = props => {
    useEffect(() => {
        props.getSmurfs();
    }, [props]);

    if (props.isFetching) {
        return <h3>Loading...</h3>;
    }
    return (
        <div>
            {props.error && (<div>Smurfs!!</div>)}
            {props.smurfData && props.smurfData.map(info => (
                <SmurfDisplay key={info.id} info={info} />
            ))}
        </div>
    );
};

const mapStateToProps = state => {
    return {
        smurfData: state.smurfData,
        isFetching: state.isFetching,
        error: state.error
    };
};

export default connect(mapStateToProps, { getSmurfs })(Smurf);

//Task List:
//1. Access smurf to be displayed through props.
//2. Display the name, position, nickname and description of the provided smurf as needed.
//3. Style as needed. (feel free to make use of the bootstrap card structure: https://getbootstrap.com/docs/4.0/components/card/)
//4. DO NOT DELETE THE data-testid FIELD! It is used for sprint grading.