import React,{useState} from 'react'
import { connect } from 'react-redux'
import {postSmurf} from '../actions/actions'

const SmurfForm = (props) => {

    const [theSmurf, setTheSmurf] =useState({
        name:'',
        age:'',
        height:''
    })

    const smurfHandler = e => {
        setTheSmurf({
            ...theSmurf,
            [e.target.name]: e.target.value
        })
    }

    const submitSmurf =e => {
        e.preventDefault()
        props.postSmurf(theSmurf)

    }
    console.log('propsinform',props)
    return(
        <>
            <h3>Add a lil guy (or gal)</h3>
            <input name='name' value={props.name} placeholder='Name' onChange={smurfHandler}/>
            <input name='age' value={props.age} placeholder='Age' onChange={smurfHandler}/>
            <input name='height' value={props.height} placeholder='Height' onChange={smurfHandler}/>
            <button onClick={submitSmurf}>Add Smurf</button>
        </>
    )
}

const mapStateToProps = (state) => {
    return{
        smurfs: state.smurfs,
        isPosting: state.isPosting,
        error: state.error

    }
}

export default connect(mapStateToProps,{postSmurf})(SmurfForm)