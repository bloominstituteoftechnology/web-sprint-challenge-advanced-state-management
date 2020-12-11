import React from 'react';
import { connect } from "react-redux";

import { addSmurf, setErrorText, getSmurfs } from "../actions/index";

class AddForm extends React.Component {
    constructor() {
        super();
        this.state = {
            
            name: "",
            position: "",
            nickname: "",
            description: "",
            id: Date.now()
        }
    }

    handleChange = (event) => {
        this.setState({
            ...this.state, [event.target.name]: event.target.value
        });
    }

    handleSubmit = (event) => {
        event.preventDefault();
        return  this.setState({
            name: "",
            position: "",
            nickname: "",
            description: ""
        });
    }

    render() {

        return (<div>
            <h2>New Smurf</h2>
            <form onSubmit={this.handleSubmit}>
                <div>
                    
                    <input onChange={this.handleChange} value={this.state.name}  />
                     <input onChange={this.handleChange} value={this.state.position}  />
                     <input onChange={this.handleChange} value={this.state.nickname}  />

                  
                    <input onChange={this.handleChange} value={this.state.description}  />
                </div>

                {this.props.error &&
                    <div data-testid="error"  role="alert">Error: {this.props.error}</div>
                }
                <button>Submit Smurf</button>
            </form>
            </div>
        );
    }
}

const mapStateToProps = state => {
    return {
        smurfs: state.smurfs,
        isLoading: state.isLoading,
        error: state.error
    }
}

export default connect(mapStateToProps, { addSmurf, setErrorText, getSmurfs })(AddForm);


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