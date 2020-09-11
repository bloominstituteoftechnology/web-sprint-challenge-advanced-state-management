import React, {useState} from 'react'
import {connect} from 'react-redux'
import {addSmurf} from '../store/actions'

const initialValues = {
    name: '',
    age: '',
    height: ''
}

function Forms(){

    const [values, setValues] = useState(initialValues)

    const change = (e) => {
        setValues({[e.target.name]: e.target.value })
    }

    const submit = (e) => {
        e.preventDefault()
        addSmurf(e)
    }

    return (
        <>
        <form onSubmit = {submit}>
            <label>Name: 
                <input 
                value = {values.name}
                onChange = {change}
                name = 'name'
                type = 'text'
                />
                </label>
            <label>Age: 
                <input 
                value = {values.age}
                onChange = {change}
                name = 'age'
                type = 'text'
                />
                </label>
            <label>Height: 
                <input 
                value = {values.height}
                onChange = {change}
                name = 'height'
                type = 'text'
                />
                </label>
            <button> Add Smurf</button>
        </form>
        </>
    )
}

export default connect(() => {return{}}, {addSmurf})(Forms)