import React, { useState, useEffect } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import addSmurf from '../actions/addSmurfAction';



const AddSmurf = () => {
    const state = useSelector(state => state.smurf);
    const dispatch = useDispatch();
    const [newSmurf, setSmurf] = useState({name:'', age:'', height:''});

console.log('here is state from addSmurf', state)
const submit = () => dispatch(addSmurf(newSmurf))
    
useEffect(() => {
    dispatch(addSmurf(newSmurf));
  }, [])
    
const handleChanges = (e) => {
    console.log("here is handlChanges", e.target.value, e.target.name)
    e.preventDefault();
        setSmurf({
            ...newSmurf,
            [e.target.name]: e.target.value})
      };
    
     console.log('here is new smurf', newSmurf)

    return(
        <div>
                <div>
                    Name: <input type='text' name='name' value={newSmurf.name} onChange={handleChanges}/>
                </div>
                <div>
                    Age: <input type='text' name='age' value={newSmurf.age} onChange={handleChanges}/>
                </div>
                <div>
                    Height: <input type='text' name='height' value={newSmurf.height} onChange={handleChanges}/>
                </div>
                <div>
                    <button onClick={submit}> Add Smurf </button>
                </div>
        </div>
    )
}

export default AddSmurf;
