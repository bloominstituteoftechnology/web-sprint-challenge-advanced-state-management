import React from 'react';
import { useState } from 'react';

const Form = (props) => {
    //Set initial values
    const [input, setInput] = useState({ name: '', age: '', height: '' });

    const handleChange = (e) => {
        setInput({ ...input, [e.target.name]: e.target.value })
    }

    const handleClick = (e) => {
        e.preventDefault();
    }


    return(
        <form>
            <label>Name
                <input
                    type="text"
                    name='name'
                    value={input.name}
                    onChange={handleChange}
                />
            </label>
            <label>Age
                <input
                    type="number"
                    name='age'
                    value={input.age}
                    onChange={handleChange}
                />
            </label>
            <label>Height
                <input
                    type="number"
                    name='height'
                    value={input.height}
                    onChange={handleChange}
                />
            </label>
            <button onClick={handleClick}>Add Smurf</button>
        </form>
        )
}

export default Form;