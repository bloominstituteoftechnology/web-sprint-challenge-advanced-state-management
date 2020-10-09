import React, { useState } from 'react'
import { connect } from 'react-redux'
import { addSmurf } from '../store/actions/smurfActions'

function NewSmurfForm(props) {
    const [newSmurf, setNewSmurf] = useState({
        name: '',
        age: '',
        height: '',
    })

    const handleChange = (e) => {
        setNewSmurf({
            ...newSmurf,
            [e.target.name]: e.target.value
        })
    }

    const handleSubmit = (e) => {
        e.preventDefault()
        props.addSmurf(newSmurf)
    }

    return(
        <form  onSubmit={handleSubmit} className='add-smurf'>
            <input 
            name='name'
            placeholder='Name'
            onChange={handleChange}
            value={newSmurf.name}
            />
            <input className='middle-input'
            name='age'
            placeholder='Age'
            onChange={handleChange}
            value={newSmurf.age}
            />
            <input 
            name='height'
            placeholder='Height'
            onChange={handleChange}
            value={newSmurf.height}
            />
            <button type='submit' >Add Smurf</button>
        </form>
    )
}

export default connect(null, {addSmurf})(NewSmurfForm)
