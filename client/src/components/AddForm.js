import React from 'react';
import { addSmurf, handleError } from '../actions/index';
import { connect } from 'react-redux';

class AddForm extends React.Component {
    state = {
        name: "",
        position: "",
        nickname: "",
        description: "",
        id: new Date()
    }
    render() {
        const handleChange = e => {
            const name = e.target.name
            this.setState({
                ...this.state,
                [name]: e.target.value
            });
        };
        const nameValidation = () => {
            const names = this.props.smurfs.filter(smurf => {
                if (smurf.name === this.state.name) return true
            });
            if (names.length != 0) {
                return false
            } else {
                return true
            }
        };
        const handleSubmit = e => {
            e.preventDefault();
            const validation = nameValidation();
            if (validation != true){
                this.props.handleError("That name is already in use")
                return
            } 
            this.props.addSmurf(this.state);
            this.setState({
                name: "",
                position: "",
                nickname: "",
                description: "",
                id: new Date()
            });
        };

        return(<section>
            <h2>Add Smurf</h2>
            <form onSubmit={handleSubmit}>
                <div className="form-group">
                    <label htmlFor="name">Name:</label><br/>
                    <input onChange={handleChange} name="name" id="name" value={this.state.name} required={true}/>
                    <label htmlFor="position">Position:</label><br/>
                    <input onChange={handleChange} name="position" id="position" value={this.state.position} required={true} />
                    <label htmlFor="position">Nickname:</label><br/>
                    <input onChange={handleChange} name="nickname" id="nickname" value={this.state.nickname} required={true} />
                    <label htmlFor="description">Description:</label><br/>
                    <input onChange={handleChange} name="description" id="description" value={this.state.description} />
                </div>
                {(this.props.error === null) ? "" : <div data-testid="errorAlert" className="alert alert-danger" role="alert">Error: {this.props.error} </div>}
                <button type="submit" >Submit Smurf</button>
            </form>
        </section>);
    }
}

const mapStateToProps = (state) => {
    return{
        smurfs: state.smurfs,
        error: state.error
    }
}

export default connect(mapStateToProps, { addSmurf, handleError })(AddForm);

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