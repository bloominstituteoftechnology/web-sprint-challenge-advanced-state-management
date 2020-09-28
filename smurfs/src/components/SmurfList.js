import React, { useEffect } from "react";
import SmurfData from './SmurfData';
import { connect } from "react-redux";
import { fetchData } from "../actions/actions";

const SmurfList = props =>{
    useEffect(() =>{
        props.fetchData();
    }, []);

    return(
        <div className="smurf-list">
            <h2>Smurfs:</h2>
            {props.newSmurfs.length > 0 && props.newSmurfs.map(smurf =>(
                <SmurfData key={smurf.id} smurf={smurf}/>
            ))}

        </div>
    )

}

const mapStateToProps = (state) => {
    return {
        newSmurfs : state.newSmurfs
    }
}

export default connect(mapStateToProps, {fetchData})(SmurfList)