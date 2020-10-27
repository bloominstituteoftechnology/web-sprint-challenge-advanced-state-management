import React, { useState } from "react";
import axios from "axios";

export const Xform = props => {
    const defaultState = {
        name: '',
        age: '',
        height: '',
        id: new Date()
    };
    const [formState, setFormState] = useState(defaultState);

    const formSubmit = e => {
        e.preventDefault();
        console.log('form submitted!');
        axios
            .post('http://localhost:3333/smurfs', formState)
            .then(() => {props.setUsers([...props.users, {formState}]);
                         console.log(formState);})
            .catch(err => console.log(err));
    };

    const inputChange = e => {
        console.log(e.target.type);
        const value = e.target.type === 'checkbox' ? e.target.checked : e.target.value;
        setFormState({
            ...formState,
            [e.target.name]: value
        });
    };

    return (
        <div className='formBody'>
            <form className='createForm' onSubmit={formSubmit}>
                <h1>Create Smurf</h1>
                <div className='txtb'>
                    Name:
                    <input 
                        type='text'
                        name='name'
                        autoComplete='off'
                        value={formState.name}
                        onChange={inputChange}/>                    
                </div>
                <div className='txtb'>
                    Age:
                    <input
                        type='text'
                        name='age'
                        value={formState.age}
                        onChange={inputChange}/>
                </div>
                <div className='txtb'>
                    Height:
                    <input
                        type='text'
                        name='height'
                        value={formState.height}
                        onChange={inputChange}/>
                </div>            
                <button className='submit-button' type="submit">Create</button>
            </form>
        </div>
    )
}