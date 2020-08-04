import React, { useState } from 'react'
import { connect } from 'react-redux';
import { postSmurfs } from '../actions/actions'

const SmurfsForm = (props) => {
    

    const [smurf, setSmurf ] = useState({
        name: '',
        age: '',
        height: ' '
    })
    const inputHandler = e => {
        setSmurf( {...smurf, [e.target.name]: e.target.value})
    }
    const submitHandler = e => {
        e.preventDefault();
        props.postSmurfs(smurf)
    }
    
    return (
        <div>
            <form id='playerForm'>
                <label htmlFor='name'>
                    Name
                    <input
                        type='text'
                        name='name'
                        label = 'name'
                        placeholder = 'Enter Name'
                        value = {props.name}
                        onChange = {inputHandler}
                        className = 'input'
                        />
                </label>

                <label htmlFor='age'>
                    Age
                    <input
                        type='text'
                        name='age'
                        label = 'age'
                        placeholder = 'Enter Age'
                        value = {props.age}
                        onChange = {inputHandler}
                        className = 'input'
                        />
                </label>

                <label htmlFor='height'>
                    Height
                    <input
                        type='text'
                        name='height'
                        label = 'height'
                        placeholder = 'Enter Height'
                        value = {props.height}
                        onChange = {inputHandler}
                        className = 'input'
                        />
                </label>

                <button onClick={submitHandler}>Submit</button>
            </form>
        </div>
    )
}

const mapStateToProps = (state) => {
    return{
        smurfs: state.smurfs,
        isPosting: state.isPosting,
        error: state.error
    }
}

export default connect(mapStateToProps, {postSmurfs})(SmurfsForm)
