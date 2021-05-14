import React, { useState } from 'react';
import { connect } from 'react-redux';
import { addSmurf, setError } from '../actions';


const AddForm = (props) => {
    const [smorf, setSmorf] = useState({
        name:"",
        position:"",
        nickname:"",
        description:""
    });



    const handleChange = (e) => {
        setSmorf({
            ...smorf,
            [e.target.name]: e.target.value
        });
    }

    console.log(smorf)

    const handleSubmit = (e) => {
        e.preventDefault();
        props.addSmurf(smorf)
        if (name === "" || position === "" || nickname === "") {
            errorMessage = "Name, position and nickname fields are required.";
        }
    }

    const errorMessage = "";

    const { name, position, nickname, description } = smorf;

    console.log(errorMessage)

    return(<section>
        <h2>Add Smurf</h2>
        <form onSubmit={handleSubmit}>
            <div className="form-group">
                <label htmlFor="name">Name:</label><br/>
                <input onChange={handleChange} value={name} name="name" id="name" />
            </div>
            <div className="form-group">
                <label htmlFor="position">Position:</label><br/>
                <input onChange={handleChange} value={position} name="position" id="position" />
            </div>
            <div className="form-group">
                <label htmlFor="nickname">Nickname:</label><br/>
                <input onChange={handleChange} value={nickname} name="nickname" id="nickname" />
            </div>
            <div className="form-group">
                <label htmlFor="description">Description:</label><br/>
                <textarea onChange={handleChange} value={description} name="description" id="description" />
            </div>
            {
                errorMessage && <div data-testid="errorAlert" className="alert alert-danger" role="alert">Error: {errorMessage}</div>
            }
            <input type="submit" className="btn btn-success" value="Add"/>
            
        </form>
    </section>);
}

export default connect(null, {addSmurf, setError})(AddForm);

//Task List:
//1. Connect the errorMessage, setError and addSmurf actions to the AddForm component.
//2. Replace all instances of the errorMessage static variable with your error message state value. 
//3. Within the handleSubmit function, replace the static assignment to errorMessage with a call to the setError action. Test that an error is displayed when this validation code fails.
//4. Within the handleSubmit function, call your addSmurf action with the smurf name, position, nickname and summury passed as arguments. Test that a smurf is correctly added to when the form is submitted.