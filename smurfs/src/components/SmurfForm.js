
import React, { useState } from "react";
import { connect } from 'react-redux';
import { addSmurf } from '../actions/index'


const initialSmurfValues={
    
    name:"",
    age:"",
    height:""
};

const SmurfForm = (props) =>{
    const [data,setData] = useState(initialSmurfValues);

    const handleSubmit = e =>{
        e.preventDefault();
        setData(initialSmurfValues)
        props.addSmurf(data)
        console.log("submitted")
    }

    const handleChanges = e =>{
        setData({...data,
        [e.target.name]: e.target.value})
    }
return(
    <form onSubmit={handleSubmit}>
        <div className="header">
            <h1>Smurfs Village</h1>
            
        </div>
        <h2>Join our Smurf Village today!</h2>
        <div className="form-body">
        <h2>To join fill out the information below!</h2>

            <label>
                <input
                    type="text"
                    name="name"
                    value={data.name}
                    onChange={handleChanges}
                    placeholder="Name"
                    />
             </label>

             <label>
                <input
                    type="text"
                    name="age"
                    value={data.age}
                    onChange={handleChanges}
                    placeholder="Age"
                    />
             </label>

             <label>
                <input
                    type="text"
                    name="height"
                    value={data.height}
                    onChange={handleChanges}
                    placeholder="Height"

                    />
             </label>
             <button>Add Smurf</button>

             </div>
            
    


    </form>
)
}

const mapStateToProps = (state) => {
    return {
        newSmurf: state.newSmurf
    }
}

export default connect(
    mapStateToProps,
    {addSmurf}
)(SmurfForm);