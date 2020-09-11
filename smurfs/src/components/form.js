import axios from 'axios'
import React, {useState} from 'react'



const initialValues = {
    name: '',
    age: '',
    height: '',
    id:''
}

function Forms(){

    const [values, setValues] = useState(initialValues)
    const [newSmurf, setNewSmurf] = useState(initialValues)

    const change = (e) => {
        setNewSmurf({...newSmurf, [e.target.name]: e.target.value })
    }

    const postNewSmurf = (newSmurf) => {
        axios.post('http://localhost:3333/smurfs', {
            name: newSmurf.name,
            age: newSmurf.age,
            height: newSmurf.height
        })
        .then(res => {
            console.log(res)
        })
        .catch(err => {
            console.log(err)
        })
        .finally(() => {
            setValues(initialValues)
        })
    }

        // const submit = (e) => {
        //     e.preventDefault()
    
        //     const newSmurf ={
        //         name: values.name,
        //         age: values.age,
        //         height: values.height, 
        //         id: values.id
        //     }
    
        //     postNewSmurf(newSmurf)
        // }



    return (
        <>
        <form >
            <label>Name: 
                <input 
                value = {newSmurf.name}
                onChange = {change}
                name = 'name'
                type = 'text'
                />
                </label>
            <label>Age: 
                <input 
                value = {newSmurf.age}
                onChange = {change}
                name = 'age'
                type = 'text'
                />
                </label>
            <label>Height: 
                <input 
                value = {newSmurf.height}
                onChange = {change}
                name = 'height'
                type = 'text'
                />
                </label>
            <button onClick = {postNewSmurf(newSmurf)}> Add Smurf</button>
        </form>
        </>
    )
}

export default Forms