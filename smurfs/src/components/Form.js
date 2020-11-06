import React, { useState } from 'react';
import { connect } from 'react-redux';
import { addSmurf } from '../store/actions';

const initialValues = {
    name: '',
    age: '',
    height: ''
};

const Form = props => {
    const [ values, setValues ] = useState(initialValues);

    const handleSubmit = e => {
        e.preventDefault();
        props.addSmurf(values);
        setValues(initialValues);
    }

    const handleChanges = e => {
        setValues({
            ...values,
            [e.target.name] : e.target.value
        })
    }

    return (
        <form 
        onSubmit={handleSubmit}>

            <h1>Village</h1>

            <label>
                Name:
                <input type='text' name='name' value={values.name} onChange={handleChanges} />
            </label>

            <label>
                Age:
                <input type='text' name='age' value={values.age} onChange={handleChanges} />
            </label>

            <label>
                Height:
                <input type='text' name='height' value={values.height} onChange={handleChanges} />
            </label>
            <button>Add Smurf</button>

        </form>
    );

};

const mapStateToProps = state => {
    return {
        isLoading: state.isLoading,
        smurfs: state.smurfs
    }
}
export default connect(mapStateToProps, { addSmurf })(Form);