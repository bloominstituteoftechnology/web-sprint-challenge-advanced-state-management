import React, { useState } from 'react';
import axios from 'axios';

const SmurfForm = () => {
  const [smurf, setSmurf] = useState({name: "", age: "", height: ""});

  const handleSubmit = () => {
    axios
      .post('http://localhost:333/smurfs', smurf)
      .then((res) => {
        console.log(res);
      })
      .catch((err) => {
        console.log(err);
      })
  };

  const handleChange = (e) => {
    setSmurf({...smurf, [e.target.name]: e.target.value });
  }

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <label htmlFor='name'>Name: </label>
        <input
          type='text'
          name='name'
          id='name'
          value={smurf.name}
          onChange={handleChange}
        />
        <br />
        <label htmlFor='age'>Age: </label>
        <input
          type='text'
          name='age'
          id='age'
          value={smurf.age}
          onChange={handleChange}
        />
        <br />
        <label htmlFor='height'>Height: </label>
        <input
          type='text'
          name='height'
          id='height'
          value={smurf.height}
          onChange={handleChange}
        />
        <br />
        <button type='submit'>Add</button>
      </form>
    </div>
  );
};

export default SmurfForm;