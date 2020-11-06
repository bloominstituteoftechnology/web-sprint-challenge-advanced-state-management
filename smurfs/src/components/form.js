import axios from "axios";
import React, { useEffect, useState } from "react";
import {addNewSmurf} from "../actions/actions";
import {connect} from "react-redux";
import {getData} from "../actions/actions";

function Form(props) {
const [newSmurf, setNewSmurf] = useState({
    name: "",
    age: "",
    height: "5cm",
   id: Date.now()
    
});


const handleChange = (e) => {
    setNewSmurf({...newSmurf,
        [e.target.name]: e.target.value})
}
const submit = (e) => {
    e.preventDefault();
    props.addNewSmurf(newSmurf);
    setNewSmurf({
        name: "",
        age: ""
    })
    
}
useEffect(() => {
    props.getData();
}, []);
return (
    <div className="form">
    <h2>New to the village? Sign in!</h2>
    <form onSubmit={submit}>
        <label htmlFor="name">What's your name</label>
        <input placeholder="     name" type="text" name="name" onChange={handleChange} value={newSmurf.name} />
        <label htmlFor="age">How old are you?</label>
        <input type="text" name="age" value={newSmurf.age} onChange={handleChange} placeholder="     age" />
        {/* <label htmlFor="terms">Checking your not Gargamel. Are you 5cm tall and blue?</label>
        <input type="checkbox" value={newSmurf.height} onChange={handleChange} /> */}
        <button>Join the Village</button>
    </form>
    </div>
)
};
const mapStateToProps = (state) => {
    return {
        data: state.data
    }
}
export default connect(mapStateToProps, {addNewSmurf, getData})(Form);