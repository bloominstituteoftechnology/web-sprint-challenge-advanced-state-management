import React, { useEffect } from 'react'
import Smurf from './Smurf';
import { connect } from "react-redux";

const SmurfList = (props)=> {

    // console.log("props from sl: ", props)
    
    if (props.isLoading) {
        return <h1>Loading...</h1>;
    }

    

    return(<div className="listContainer">
        {
            props.smurfs.map(smurf => {
            return <Smurf key={smurf.id} smurf={smurf} />
            })
        }

    </div>);
}


//Task List: COMPLETE
//1. Connect the smurfs and loading state values to the SmurfList component.//
//2. Replace the single Smurf component instance with a map return a Smurf component for each entry in the smurfs list.//
//3. Replace the static isLoading variable with the state loading variable.//

const mapStateToProps = (state) => {
    return {
        smurfs: state.smurfs,
        isLoading: state.isLoading
    }
};

export default connect(mapStateToProps, null)(SmurfList);