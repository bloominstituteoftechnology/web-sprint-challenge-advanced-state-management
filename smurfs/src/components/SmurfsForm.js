import React, {useState} from 'react';
import {connect} from 'react-redux';
import {postSmurfs} from '../actions/smurfActions';

const SmurfsForm = (props) =>{
    const [smurf, setSmurf] = useState({
        name:'',
        age: '',
        height: '',
    })

    const inputHandler = e => {
        setSmurf({...smurf, [e.target.name]: e.target.value})
    }

    const submitHandler = e => {
        e.preventDefault();
        props.postSmurfs(smurf)
    }

    return(
        <div>
            <form id='smurfForm'>
            <label htmlFor="name">Name: </label>
            <input
                type="text"
                name="name"
                label="name"
                placeholder="Name?"
                value={props.name}
                onChange={inputHandler}
                className='input'/>

            <label htmlFor="age">Age: </label>
            <input
                type="text"
                name="age"
                label="age"
                placeholder="Age?"
                value={props.age}
                onChange={inputHandler}
                className='input'/>

            <label htmlFor="name">Height: </label>
            <input
                type="text"
                name="height"
                label="height"
                placeholder="Centimeters?"
                value={props.height}
                onChange={inputHandler}
                className='input'/>

            <button onClick={submitHandler}>Add your smurf to the Village!</button>
            </form>
        </div>
    );
};

const mapStateToProps = (state) => {
    return{
        smurfs: state.smurfs,
        isPosting: state.isPosting,
        error: state.error
    }
}

export default connect(mapStateToProps, {postSmurfs})(SmurfsForm);

