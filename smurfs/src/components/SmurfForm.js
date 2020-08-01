import React, { useState } from 'react';
import e from 'express';

const SmurfForm = (props) => {
    const [smurf, setSmurf] = useState({
        name: '',
        age: '',
        height: ''
    })

    const inputHandler = e => {
        setSmurf({ ...smurf, [e.target.name]: e.target.value })
    }


    return (
        <form className='form' id='smurfForm'>
            <label htmlFor='name' className='label'>Name</label>
            <input
                type='text'
                name='name'
                label='name'
                placeholder='Enter Name'
                value={props.name}
                onChange={inputHandler}
                className='input' />

            <label htmlFor='age' className='label'>Age</label>
            <input
                type='text'
                name='age'
                label='age'
                placeholder='Enter Age'
                value={props.age}
                onChange={inputHandler}
                className='input' />

            <button className='btn'>Submit Smurf</button>

            <label htmlFor='height' className='label'>Height</label>
            <input
                type='text'
                name='height'
                label='height'
                placeholder='Enter height'
                value={props.height}
                onChange={inputHandler}
                className='input' />
        </form>
    )
};

export default SmurfForm;