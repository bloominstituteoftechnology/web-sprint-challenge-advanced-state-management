import axios from 'axios';
import React, {useState} from 'react';
import {UpdateSmurfs} from "../actions/GetSmurfs";
import {useDispatch } from "react-redux";

const mapStateToProps = (state) => {
    return state;
}

const mapDispatchToProps = {UpdateSmurfs}

function AddForm(state) {

        const [name, setName] = useState("");
        const [position, setPosition] = useState("");
        const [nickname, setNickname] = useState("");
        const [description, setDescription] = useState("");

        const dispatch = useDispatch();

        const handleSubmit = (e) => {
            e.preventDefault();
            const newSmurf = {
                id: Date.now(),
                name,
                position,
                nickname,
                description, 
            }
            dispatch({type: UpdateSmurfs(newSmurf)})
            console.log(state)
        }
        return(<section>
            <h2>Add Smurf</h2>
            <form onSubmit={handleSubmit}>
                <div className="form-group">
                    <label htmlFor="name">Name:</label><br/>
                    <input onChange={(e) => setName(e.target.value)} name="name" id="name" />
                    <label htmlFor="position">Position:</label><br/>
                    <input onChange={(e) => setPosition(e.target.value)} name="position" id="position" />
                    <label htmlFor="nickname">Nickname:</label><br/>
                    <input onChange={(e) => setNickname(e.target.value)} name="nickname" id="nickname" />
                    <label htmlFor="description">Description:</label><br/>
                    <input onChange={(e) => setDescription(e.target.value)} name="description" id="description" />
                </div>

                <div data-testid="errorAlert" className="alert alert-danger" role="alert">Error: </div>
                <button>Submit Smurf</button>
            </form>
        </section>);

}

export default AddForm;



//Task List:
//1. Add in all necessary import components and library methods.
//2. Connect all needed redux state props and action functions to the component before exporting.
//3. Add state holding name, position, nickname and description to component.
//4. Build form DOM to include inputs for name, position and description of the component.
//      - an array of smurfs
//      - a boolean indicating if the app is loading
//      - error text
//      - MAKE SURE TO CORRECTLY CONNECT LABELS TO YOUR FORM INPUTS. USE THE PATERN OF SHOWN FOR NAME.
//5. Build eventhandler and listener needed to change the state.
//6. Build eventhandler and listener needed to submit a new smurf and dispatch it's assosated action.
//7. Ensure that the included alert code only displays when error text is passed in from redux.
//4. DO NOT DELETE THE data-testid FIELD FROM THE ERROR ALERT! This is used for sprint grading.
//8. Style as necessary.