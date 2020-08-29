import React from 'react'
import { connect } from 'react-redux'
import { postData, fetchSmurfData } from '../actions'

const Smurf = props => {
    console.log(props, "props")
    return (
        <div>
            {props.smurfData.map( e => {
                return (
                    <div key={e.id}>
                        <h1>Name:{e.name}</h1>
                        <h5>Height:{e.height}</h5>
                        <h5>Age:{e.age}</h5>
                    </div>
                )
            })}
        </div>
    )
}

const mapStateToProps = state => {
    console.log(state, "state");
    return {
        smurfData: state.smurfData
    }
}

export default connect(mapStateToProps, {postData, fetchSmurfData})(Smurf);