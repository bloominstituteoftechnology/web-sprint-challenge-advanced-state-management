import axios from "axios";
import React, { useState } from "react";

export default function Form() {
const [newSmurf, setNewSmurf] = useState({
    name: "",
    age: "",
    height: "5cm",
    
});
//put data from the server in here
const [smurfList, setSmurfList] = useState([]);

const handleChange = (e) => {
    setNewSmurf({...newSmurf,
        [e.target.name]: e.target.value})
}
const submit = (e) => {
    e.preventDefault();
    setNewSmurf({
        name: "",
        age: ""
    })
    axios.post('/smurfs', newSmurf)
    .then((res) => {
        console.log("post request res: ", res);
        setSmurfList(res);
    })
    .catch((err) => {
        console.log("post request err: ", err);
    })
}

return (
    <form onSubmit={submit}>
        <label htmlFor="name">What's your name</label>
        <input placeholder="     name" type="text" name="name" onChange={handleChange} value={newSmurf.name} />
        <label htmlFor="age">How old are you?</label>
        <input type="text" name="age" value={newSmurf.age} onChange={handleChange} placeholder="     age" />
        {/* <label htmlFor="terms">Checking your not Gargamel. Are you 5cm tall and blue?</label>
        <input type="checkbox" value={newSmurf.height} onChange={handleChange} /> */}
        <button>Join the Village</button>
    </form>
)
}