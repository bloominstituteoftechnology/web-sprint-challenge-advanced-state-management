import axios from 'axios';
import React, {useState} from 'react';
import { useDispatch } from 'react-redux'
import { getSmurfs } from '../action'

const initialValues = { 
    name: '', 
    age: '', 
    height: ''
}

const SmurfForm = () => {
    const [values, setValues]= useState(initialValues)

    const dispatch = useDispatch()

    const onChange = (evt) => {
        const { name, value } = evt.target
        setValues({
            ...values,
            [name]: value 
      })
    }

    const handleSubmit = (event) => { 
        event.preventDefault()
        const smurf= values
        postSmurf(smurf)
        setValues(initialValues)
    }

    const postSmurf = (smurf) => { 
        axios.post("http://localhost:3333/smurfs", smurf)
        .then((response) => { 
            console.log(response)
            dispatch(getSmurfs())
        })
        .catch((error) => { 
            alert("There was an error creating your Smurf", error)
        })
    }
    
    return ( 
        <div className='form-container'>
            <h2>Add a new Smurf</h2>
            <form onSubmit={handleSubmit}>
                <div className='form-group'>
                    <label>Name: </label>
                    <input id='name' 
                    name='name'
                    value={values.name}
                    onChange={onChange}
                    />
                </div>
                <div className='form-group'>
                <label>Age: </label>
                    <input
                    id="age"
                    name='age'
                    value={values.age}
                    onChange={onChange}
                    />
                    
                    <label>Height: </label>
                    <input
                    name='height'
                    value={values.height}
                    onChange={onChange}
                    />
                </div>
                <button>Submit</button>
            </form>
        </div>
     );
}
 
export default SmurfForm;