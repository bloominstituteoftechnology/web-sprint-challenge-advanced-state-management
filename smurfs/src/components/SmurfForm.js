import React, { useState } from 'react'
import { connect } from 'react-redux'; 
import { addSmurf } from '../actions/smurfActions'; 
import { v4 as uuid } from 'uuid'; 


// Step 10. SmurfForm - plan and implement the basics 
const SmurfForm = (props) => {

    const [smurf, setSmurf] = useState({
        name: '', 
        age: '',
        height: '', 
        id: uuid(), 
    }); 

    const handleChange = (e) => {
        
        setSmurf({
            ...smurf,
            [e.target.name]: e.target.value
        }); 
    }

    const handleSubmit = (e) => {
        e.preventDefault(); 
        props.addSmurf(smurf)
    }


    return (
        <div>
            <form onSubmit={handleSubmit}>
                
                <input
                name="name"
                value={smurf.name}
                onChange={handleChange}
                placeholder="name"/>

                <input 
                name="age"
                value={smurf.age}
                onChange={handleChange}
                placeholder="age"/> 
                
                <input 
                name="height"
                value={smurf.height}
                onChange={handleChange}
                placeholder="height in cm"/>

                <button type="submit"> Add Smurf! </button>
            </form>
        </div>
    )
}

// step 11 - now we must create an addSmurf action to handle the submission of a new smurf. Then we must connect this form to store to get that action

export default connect(null, { addSmurf })(SmurfForm); 
