import React, { useState } from 'react'
import { connect  } from 'react-redux'
import { postData, fetchSmurfData } from '../actions'

const initialFormValues = {
    name: '',
    age: '',
    height: '',
}

const Form = props => {
    console.log(props, "form props")
    const [ formValues, setFormValues ] = useState(initialFormValues)
    

    const inputHandler = e => {
        const name = e.target.name
        const value = e.target.value
        setFormValues({...formValues, [name]: value})
    }
    const onFormSubmit = e => {
        e.preventDefault();
        const newSmurf = {
            name: formValues.name,
            age: formValues.age,
            height: formValues.height,
        }
        props.postData(newSmurf)
        setFormValues(initialFormValues);
    }

    return (
        <div>
            <form>
                <input
                className='Input'
                name='name'
                type='text'
                value={formValues.name}
                onChange={inputHandler}
                placeholder='Name'
                ></input>
                <br></br>
                <input
                className='Input'
                name='age'
                type='text'
                value={formValues.age}
                onChange={inputHandler}
                placeholder='Age'
                ></input>
                <br></br>
                <input
                className='Input'
                name='height'
                type='text'
                value={formValues.height}
                onChange={inputHandler}
                placeholder='Height'
                ></input>
            </form>
            <br></br>
            <button className='Button' onClick={onFormSubmit}>Add</button>
        </div>
    )
}


  export default connect(null, {postData, fetchSmurfData})(Form);