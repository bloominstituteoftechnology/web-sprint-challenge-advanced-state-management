import React, { useState } from 'react';
import { connect } from 'react-redux';
import { postSmurf }  from '../actions';

/////OMG IT HAS TO BE CAPITALIZED 

function SmurfForm ({postSmurf}) {
    const [smurfData, setSmurfData] = useState({name: '', age: '', height:''});

    const handleChange = e => {
        setSmurfData({...smurfData, [e.target.name]: e.target.value})
    }

    const newSmurf = e => {
        e.preventDefault();
        postSmurf(smurfData);
        
    }

    return (
        <form>
            <label> Name :
                <input
                type='text'
                name='name'
                value={smurfData.name}
                onChange={handleChange}
                />
              </label>
              <label>

              </label>
              <input
              type='text'
              name='age'
              value={smurfData.age}
              onChange={handleChange}
              />
              <input
              type='text'
              name='height'
              value={smurfData.height}
              onChange={handleChange}
              />
              <button color="blue" onClick={newSmurf}>New Smurf</button>
        </form>
    )
}

export default connect(null, {postSmurf})(SmurfForm)