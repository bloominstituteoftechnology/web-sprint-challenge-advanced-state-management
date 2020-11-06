import SmurfList from './SmurfList'
import axios from 'axios'
import React, { useState, useEffect} from 'react';

// import {initialState, smurfFormReducer, SUBMIT_SMURF, ADD_SMURF} from '../reducers/smurfFormReducer'

const SmurfForm = () => {
    // const [state, dispatch] = useReducer(smurfFormReducer, initialState)
    const [formValues, setFormValues] = useState({
        name: '',
        age: 200,
        height: '',
    })
    const [smurfList, setSmurfList] = useState([])

    useEffect(() => {
        axios.get('http://localhost:3333/smurfs')
        .then(res => {
            setSmurfList(res.data)
        })
        .catch(err => {
            console.log(err)
        })
    }, [])
    

    const onChange = (e) => {
        // dispatch({type: ADD_SMURF, payload: e.target.value})
        setFormValues({
            ...formValues,
            [e.target.name]: e.target.value
        })
    }

    const onSubmit = (e) => {
        e.preventDefault();
        const newSmurf = {name: smurfList.name, height: smurfList.height, age: smurfList.age}
            axios.post('http://localhost:3333/smurfs', newSmurf)
            .then(res => {
                debugger
                setSmurfList({
                    name: '',
                    age: 200,
                    height: ''})
            })
            .catch(err => {
                debugger
                console.log(err)
            })
    }
   

    return (
        <div className='smurfForm'>
            <div>
                {smurfList.map((item, ind) => {
                    return <SmurfList data={item} key={ind}/>
                })}
            </div>
            <form onSubmit={onSubmit}>
                <label>
                    Name:
                    <input 
                    name='name'
                    value={formValues.name}
                    onChange={onChange}
                    />
                </label>
                <label>
                    Age:
                    <input 
                    name='age'
                    value={formValues.Age}
                    onChange={onChange}
                    />
                </label>
                <label>
                    Height:
                    <input 
                    name='height'
                    value={formValues.height}
                    onChange={onChange}
                    />
                </label>
                <button>Add Smurf</button>
            </form>
        </div>
    )
}

export default SmurfForm;