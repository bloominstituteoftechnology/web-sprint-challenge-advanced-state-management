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
  }
};

export default SmurfForm;