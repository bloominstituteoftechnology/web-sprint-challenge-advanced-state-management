import Axios from 'axios';
import React, {useState} from 'react'

const Form = () => {
    const [form, setForm] = useState({});
    const [newSmurf, setNewSmurf] =  useState({
        name: '',
        age: '',
        height: '',
    });
    
    const handleChanges = (event) => {
        console.log(newSmurf)
        setNewSmurf({...newSmurf, [event.target.name]: event.target.value})
    }

    const handleSubmit = (event) => {
        event.preventDefault();
        //props.updateSmurfData(newSmurf);
    }

    return (
        <section>
            <form>
                <label htmlFor='name'>Name:</label>
                <input id='name' name='name' type='text' value={newSmurf.name} onChange={handleChanges} />
                <label htmlFor='age'>Age:</label>
                <input id='age' name='age' type='text' value={newSmurf.age} onChange={handleChanges} />
                <label htmlFor='height'>Height:</label>
                <input id='height'  name='height' type='text' value={newSmurf.height} onChange={handleChanges} />
                <button>Add Smurf</button>
            </form>
        </section>
    )
}

export default Form;