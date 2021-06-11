import React from 'react';
import { connect } from 'react-redux';
import Smurf from './Smurf';

 const SmurfList = (props)=> {
    const { smurfs, isLoading } = props;
    
    if (isLoading) {
        return <h1>Loading...</h1>;
    }
    
    return(<div className="listContainer">
        {
            smurfs.map(smurf=><Smurf key={smurf.id} smurf={smurf} />)
        } 
    </div>);
}

const mapStateToProps = (state) => {
    return {
        smurfs: state.smurfs,
        isLoading: state.isLoading
    }
}

export default connect(mapStateToProps)(SmurfList)