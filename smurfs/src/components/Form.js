import React, {useState} from "react"
import {connect} from "react-redux"
import {displaySmurfs} from "../actions"


function Form(props) {

const [submit, setSubmit] = useState()


// const handleChange = (e) => {
//     setSubmit(e.target.value)

// }

const handleClick = (e) => {
    e.preventDefault()
    props.displaySmurfs(submit)
}

    return(
        <div>
        <button onClick={handleClick}>Get Smurfs</button>
        {props.smurfs.map((item)=> {
    return <div key={item.id}>
    <p>Name: {item.name}</p>
    <p>Age: {item.age}</p>
    <p>Height: {item.height}</p>
    </div>
})}
    </div>
        // <form 
        // onSubmit={(e) =>{
        //     e.preventDefault()
        //     //props.Submit(submit) need to create submit state on this component and update state for name, age & height
        // }}>
        //     <label>Name</label>
        //     <input
        //     type="text"
        //     name="name"
        //     value={name}
        //     onChange={handleChange}>
            
        //     </input>

        // </form>
    )
}

const mapStateToProps = (state) => {
    return {
        smurfs: state.smurfs
        
    }
}

export default connect(mapStateToProps, {displaySmurfs})(Form)

