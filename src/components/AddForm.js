import React, {useState} from 'react';
import {connect} from 'react-redux';
import { postSmurf,addSmurf } from '../actions';

class AddForm extends React.Component {
    state = {
        name:'',
        position:'',
        nickname: '',
        description:''
    };

    handleChange = e => {
        this.setState({...this.state,[e.target.name]:e.target.value});
    }

    handleAddSmurf =  e => {
        e.preventDefault();
        this.props.postSmurf(this.state);
        this.props.addSmurf(this.state);
    }

    render() {
        console.log(this.props);
        return(<section>
            <h2>Add Smurf</h2>
            <form onSubmit={this.handleAddSmurf} >
                <div className="form-group">
                    <label htmlFor="name">Name:</label><br/>
                    <input onChange={this.handleChange} name="name" id="name" className="required"/>            
                </div>
                <div className="form-group">
                    <label htmlFor="position">Position:</label><br/>
                    <input onChange={this.handleChange} name="position" id="position" className="required"/>            
                </div>
                
                <div className="form-group">
                    <label htmlFor="nickname">Nick Name:</label><br/>
                    <input onChange={this.handleChange} name="nickname" id="nickname" className="required"/>            
                </div>
                <div className="form-group">
                    <label htmlFor="description">Description:</label><br/>
                    <input onChange={this.handleChange} name="description" id="description" />            
                </div>

                <div data-testid="errorAlert" className="alert alert-danger" role="alert">Error: {this.props.state.error}</div>
                <button>Submit Smurf</button>
            </form>
        </section>);
    }
}
const mapStateToProps = state =>{
    return{
        state: state
    }
}

const mapDispatchToProps = dispatch => {
    return{
        postSmurf: (smurf) => dispatch(postSmurf(smurf)),
        addSmurf: (smurf) => dispatch(addSmurf(smurf))
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(AddForm);

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
//6. Build eventhandler and listener needed to subamit a new smurf and dispatch it's assosated action.
//7. Ensure that the included alert code only displays when error text is passed in from redux.
//4. DO NOT DELETE THE data-testid FIELD FROM THE ERROR ALERT! This is used for sprint grading.
//8. Style as necessary.