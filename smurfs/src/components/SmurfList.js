
import React, { useEffect } from "react";
import SmurfData from './SmurfData';
import { connect } from "react-redux";
import { fetchData } from "../actions/index";

const SmurfList = props =>{
    useEffect(() =>{
        props.fetchData();
    }, []);

    return(
       
       
        <div className="smurf-list">
            
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