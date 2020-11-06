import React, { useState } from 'react';
import { connect } from 'react-redux';
import { postSmurfs } from '../store/actions/index';



const SmurfForm = (props) => {
    const initialValues = props.smurf
    const [formValues, setFormValues] = useState(initialValues)

    const onChange = e => {
        setFormValues({
            ...formValues,
            [e.target.name]: e.target.value,
        })
    }

    const onSubmit = e => {
        props.postSmurfs(formValues)
        setFormValues(initialValues)
    }

    return (
        <form onSubmit={onSubmit}>
            <h2>Smurf Form</h2>
            <label>
                Name:
                <input 
                    type='text'
                    name='name'
                    value={formValues.name}
                    onChange={onChange}
                />
            </label>
            <br></br>
            <br></br>
            <label>
                Age:
                <input 
                    type='text'
                    name='age'
                    value={formValues.age}
                    onChange={onChange}
                />
            </label>
            <br></br>
            <br></br>
            <label>
                Height:
                <input 
                    type='text'
                    name='height'
                    value={formValues.height}
                    onChange={onChange}
                />
            </label>
            <br></br>
            <br></br>
            <button>Add your smurf</button>
        </form>
    )
}

const mapStateToProps = (state) => {
    return {
        smurfs: state.smurfs,
        smurf: state.smurf,
        error: state.error
    }
}

export default connect(mapStateToProps, {postSmurfs})(SmurfForm)