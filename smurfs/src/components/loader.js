import React from 'react'
import { connect } from 'react-redux'

import Smurfs from './Smurfs'

function Loader(props) {
 return (
     <>
     <h3>Smurfs!!</h3>
     {props.smurfData.map((facts => {
         return <Smurfs key = {facts.id} facts = {facts} />
     }))}
     </>
 )
}

function mapStateToProps(state){
    return {
        smurfData: state.Smurf.smurfData
    }
}

export default connect(mapStateToProps, {})(Loader)