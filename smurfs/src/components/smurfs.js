import React, { useEffect } from 'react'
import { connect } from 'react-redux'
import { getSmurf } from '../actions/index'

const Smurf = props => {
    useEffect(() => {
        props.getSmurf();
    },[])

    return (
        <div>
            {props.isFetching ? <p>No Smurfs Yet!!</p> : null}
            {props.error ? <p>Error</p> : null}
            {props.smurfs.length > 0 ? (
                <div>
                    {props.smurfs.map((blue) => (
                        <div>
                            <p key = {blue.id}>
                                Name: {blue.name}
                                Age: {blue.age}
                                height: {blue.height}
                            </p>
                        </div>
                    ))}
                </div>
            ):null} 
        </div>
    )
}

const mapStateToProps = state => {
    return { smurfs: state.smurfs, isFetching: state.isFetching }
}

const mapDispatchToProps = { getSmurf }

export default connect (mapStateToProps, mapDispatchToProps)(Smurf)