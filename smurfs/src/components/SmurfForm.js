import React, { useState } from 'react';
import { connect } from 'react-redux';
import { postSmurfs } from '../actions/actionsIndex';

const SmurfForm = (props) => {
    const [smurf, setSmurf] = useState({
        name: '',
        age: '',
        height: ''
    })

    const inputHandler = e => {
        setSmurf({ ...smurf, [e.target.name]: e.target.value })
    }

    const submitHandler = e => {
        e.preventDefault();
        props.postSmurfs(smurf)
    }


    return (
        <form className='form' id='smurfForm' onSubmit={submitHandler}>
            <label htmlFor='name' className='label'>Name</label>
            <input
                data-testid='name'
                type='text'
                name='name'
                label='name'
                placeholder='Enter Name'
                value={props.name}
                onChange={inputHandler}
                className='input' />

            <label htmlFor='age' className='label'>Age</label>
            <input
                data-testid='age'
                type='text'
                name='age'
                label='age'
                placeholder='Enter Age'
                value={props.age}
                onChange={inputHandler}
                className='input' />

            <label htmlFor='height' className='label'>Height</label>
            <input
                data-testid='height'
                type='text'
                name='height'
                label='height'
                placeholder='Enter height'
                value={props.height}
                onChange={inputHandler}
                className='input' />

            <button
                data-testid='submit'
                className='btn'>Submit Smurf</button>
        </form>
    )
};

const mapStateToProps = state => {
    return {
        smurfs: state.smurfs,
        isPosting: state.isPosting,
        error: state.error
    }
}

export default connect(
    mapStateToProps,
    {
        postSmurfs
    }
)(SmurfForm);