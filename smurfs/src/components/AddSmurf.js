import React, { useState } from 'react';
import { connect } from 'react-redux';
import { addNewSmurf } from '../actions';

const AddSmurf = (props) => {
   
    const [name, setName] = useState('');
    const [age, setAge] = useState('');
    const [height, setHeight] = useState('');
    
  
    const updateName = (e) => {
        setName(e.target.value);
    }
    const updateAge = (e) => {
        setAge(e.target.value);
    }
    const updateHeight = (e) => {
        setHeight(e.target.value);   
    }
    

    const newSmurf = (name, age, height) => {
        return {
            name: name,
            age: age,
            height: height,
        }
    }

    const addSmurf = (e) => {
        e.preventDefault();
        props.addNewSmurf(newSmurf(name, age, height));
    }

    return (
        <form onSubmit={addSmurf}>
            <input type='text' name='name' value={name} onChange={updateName} placeholder='name'/>
            <input type='text' name='age' value={age} onChange={updateAge} placeholder='age'/>
            <input type='text' name='height' value={height} onChange={updateHeight} placeholder='height'/>
            <button>Submit</button>
        </form>
    )
}

export default connect(null, { addNewSmurf })(AddSmurf);