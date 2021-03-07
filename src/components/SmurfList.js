import React from 'react';
import Smurf from './Smurf';
import { connect } from 'react-redux'

 const SmurfList = (props)=> {


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

const mapStateToProps = (state) => {
    return {
        smurfs: state.smurfs,
        isLoading: state.isLoading
    }
}

export default connect(mapStateToProps, null)(SmurfList)


//Task List:
//1. Connect the smurfs and loading state values to the SmurfList component.
//2. Replace the single Smurf component instance with a map return a Smurf component for each entry in the smurfs list.
//3. Replace the static isLoading variable with the state loading variable.