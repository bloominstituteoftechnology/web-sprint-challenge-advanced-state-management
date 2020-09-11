import React from 'react';
import { connect } from 'react-redux'
import Smurf from './Smurf'

function Smurfs(props) {
    return (
    <>
        <h3>Smurfs</h3>

        {props.smurfs.map(smurf => {
            return <Smurf key={smurf.id} smurf={smurf}/>
        })}
    </>
    )
}

function mapStateToProps(state) {
    return {
        smurfs: state.smurfs
    }
}

export default connect(mapStateToProps, {})(Smurfs);