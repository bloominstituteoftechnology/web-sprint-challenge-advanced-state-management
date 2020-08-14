import React, { useState } from 'react';
import { connect } from "react-redux";
import { addSmurf } from './actions/actions';

const SmurfForm = props => {

    const [ smurf, setSmurf ] = useState({
        name:'',
        age: '',
        height: ''
    })

    const handleChanges = (e) => {
        setSmurf({
            ...smurf,
            [e.target.name]: e.target.value
        })
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        props.addSmurf(smurf)
        setSmurf({
            name: '',
            age: '',
            height: ''
        })
    }

    return (
        <form onSubmit={handleSubmit}>
            <input
                name='name'
                onChange={handleChanges}
                placeholder='name'
                value={smurf.name}
            />
            <input
                name='age'
                onChange={handleChanges}
                placeholder='age'
                value={smurf.age}
            />
            <input
                name='height'
                onChange={handleChanges}
                placeholder='height'
                value={smurf.height}
            />
            <button type='submit'>
                Submit
            </button>
        </form>
    )
}

export default connect(null, { addSmurf })(SmurfForm)