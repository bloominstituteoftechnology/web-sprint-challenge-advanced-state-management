import React, {useState} from "react"
import {connect} from "react-redux"
import {submit} from "../actions"


function Form() {

const [submit, setSubmit] = useState()

const handleChange = (e) => {
    setSubmit(e.target.value)

}

const handleClick = (e) => {
    e.preventDefault()
    props.Submit()
}

    return(
        <form 
        onSubmit={(e) =>{
            e.preventDefault()
            //props.Submit(submit) need to create submit state on this component and update state for name, age & height
        }}>
            <label>Name</label>
            <input
            type="text"
            name="name"
            value={name}
            onChange={handleChange}>
            
            </input>
            <button onClick={handleClick}>Get Smurfs</button>
        </form>
    )
}

const mapStateToProps = (state) => ( {} )


// {
//     return {
//         isLoading: state.smurfReducer.isLoading,
//         isError: state.smurfReducer.isError,
//         error: state.smurfReducer.error,
        
//     }
// }

export default connect(mapStateToProps, {Submit})(Form)

