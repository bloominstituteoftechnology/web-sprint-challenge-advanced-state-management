
import React, {useState} from 'react';
import {addSmurf} from '../actions';
import {connect} from 'react-redux';

const SmurfForm = (props) => {
  const [newSmurf, setNewSmurf] = useState({
      name: '',
      age: '',
      height: ''
  })

  const handleChange = e => {
      setNewSmurf({
          ...newSmurf,
          [e.target.name]: e.target.value
      })
  }

  const handleSubmit = e => {
    e.preventDefault();
    props.addSmurf(newSmurf);
    setNewSmurf({
        name: '',
        age: '',
        height: ''
    })
}

return (
    <>
    <form>
        <input
            type='text'
            name='name'
            placeholder='Enter Smurfs name'
            value={newSmurf.name}
            onChange={handleChange}
        />
        <br />
        <input
            type='text'
            name='age'
            placeholder='Enter Smurfs age'
            value={newSmurf.age}
            onChange={handleChange}
        />
        <br />
        <input
            type='text'
            name='height'
            placeholder='Enter Smurfs height'
            value={newSmurf.height}
            onChange={handleChange}
        />
    </form>
    <button onClick={handleSubmit}>Add Smurf</button>
    </>
)
}

const mapStateToProps = state => {
    return {
        smurfs: state.smurfs
    }
}


export default connect(mapStateToProps, {addSmurf})(SmurfForm);