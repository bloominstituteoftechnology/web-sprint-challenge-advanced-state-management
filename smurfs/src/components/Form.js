import React, {useState} from "react"
import {connect} from "react-redux"
import {displaySmurfs} from "../actions"
import {postSmurfs} from "../actions"


function Form(props) {

const [addSmurf, setAddSmurf] = useState([{
    name: "",
    age: "",
    height: ""
}])
const [getSmurfs, setGetSmurfs] = useState()
const [input, setInput] = useState({
    name:"",
    age:"",
    height:""
})



const handleChanges = (e) => {
    const value = e.target.value;
    setInput({
        ...input,
        [e.target.name]: value
    })

}


const handleClick = (e) => {
    e.preventDefault()
    props.displaySmurfs(getSmurfs)
}

    return(
        <div>
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
        <form 
        onSubmit={(e) =>{
            e.preventDefault()
            props.postSmurfs(addSmurf) 
            setAddSmurf({
                name: "",
                age: null,
                height: null
            })

            // need to create submit state on this component and update state for name, age & height
        }}>
            <label>Name</label>
            <input
            type="text"
            name="name"
            value={input.name}
            onChange={handleChanges}>
            
            </input>
            <label>Age</label>
            <input
            type="text"
            name="age"
            value={input.age}
            onChange={handleChanges}>
            
            </input>
            <label>Height</label>
            <input
            type="text"
            name="height"
            value={input.height}
            onChange={handleChanges}>
            
            </input>
            <button>Add Smurf</button>

        </form>
        </div>
    )
}

const mapStateToProps = (state) => {
    return {
        smurfs: state.smurfs,


    }
}

export default connect(mapStateToProps, {displaySmurfs, postSmurfs})(Form)

