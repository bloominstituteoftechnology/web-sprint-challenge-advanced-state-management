import React from 'react'
import { connect } from 'react-redux'; 
import SmurfCard from './SmurfCard'; 

// Step 7. New component is made, we need to connect it to the store for the data

const SmurfContainer = (props) => {
    
    // step 8. Map through the props and create a SmurfCard component instance for each
    return (
        <div>
            {props.smurfs.map(smurf => {
                return <SmurfCard smurf={smurf} key={smurf.id} /> 
            })}   
        </div>
    )
}

// create a mapStateToProps to get the state flowing through the comp 
const mapStateToProps = (state) => {
    return {
        smurfs: state.smurfs, 
    }
}

export default connect(mapStateToProps, {})(SmurfContainer); 
