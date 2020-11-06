import React from 'react';
import { useState } from 'react';
import { connect } from 'react-redux';
import { mapStateToProps } from '../redux/mapStateToProps' 
import { addSmurf, getSmurfs } from '../redux/actions'
import styled from 'styled-components';

const StyledForm = styled.form`
    display: flex;
    flex-flow: column;
    width: 30%;
    margin: auto;
    justify-content: space-between;
    align-content: flex-start;    
    font-weight: 500;
    text-shadow: 2px 2px 4px #000;
    color: #fff;

    input {
        padding: 1%;
        border: 1px solid #444;
        border-radius: 10px;        
        width: 100%;
        margin: 2% 0;
        box-shadow: inset 2px 2px 5px #444;
    }

    label {
        font-size: 2rem;
    }

    button {
        margin: 2% 0;
        width: 100%;
        padding: 2%;
        font-size: 2rem;
    }
`;


const Form = (props) => {
    //Set initial values
    const [input, setInput] = useState({ name: '', age: '', height: '' });

    const handleChange = (e) => {
        setInput({ ...input, [e.target.name]: e.target.value })
    }

    const handleAdd = (e) => {
        e.preventDefault();
        props.addSmurf(input);
        props.getSmurfs();
    }

    const handleGet = (e) => {
        e.preventDefault();
        props.addSmurf(input);
        props.getSmurfs();
    }


    return(
        <StyledForm>
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
            <button onClick={handleAdd}>Add Smurf</button>
            <button onClick={handleGet}>Get Smurfs</button>
        </StyledForm>
        )
}

export default connect(mapStateToProps, { addSmurf, getSmurfs })(Form);