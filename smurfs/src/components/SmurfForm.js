import React from 'react';
import { connect } from 'react-redux';

import { postSmurf } from './actions';
import { useForm } from './hooks';

const SmurfForm = props => {

    const formData = {
        name: '',
        age: '',
        height: ''
    }

    const [ value, handleChanges ] = useForm(formData)

    const handleSubmit = e => {
        e.preventDefault()
        props.postSmurf(value)
    }

    return (
        <form onSubmit={handleSubmit}>
            <input
                name='name'
                onChange={handleChanges}
                placeholder='name'
                value={value.name}
            />
            <input
                name='age'
                onChange={handleChanges}
                placeholder='age'
                value={value.age}
            />
            <input
                name='height'
                onChange={handleChanges}
                placeholder='height'
                value={value.height}
            />
            <button type='submit'>
                Submit
            </button>
        </form>
    )
}

export default connect(null, { postSmurf })(SmurfForm);