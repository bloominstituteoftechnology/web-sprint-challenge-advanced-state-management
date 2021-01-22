import React from 'react';
import { getSmurf, postSmurf } from "../actions/index";
import { connect } from 'react-redux';
class AddForm extends React.Component {
    // useEffect(() => {
    //     postSmurf();
    //   }, []);
    state = {
        name: "",
        position: "",
        nickname:"",
        description: ""
    }

    handleChange = (e) => {
      this.setState({
        [e.target.name]:e.target.value,
        [e.target.position]:e.target.value,
        [e.target.nickname]:e.target.value,
        [e.target.description]:e.target.value,
      }
      )
    }

    handleSubmit = (e) => {
       e.preventDefault();
       this.props.postSmurf();
    }
    render() {
        return(<section>
            <h2>Add Smurf</h2>
            <form onSubmit = {this.handleSubmit}>
                <div className="form-group">
                    <label htmlFor="name">Name:</label><br/>
                    <input  value ={this.name} onChange={this.handleChange} name="name" id="name" />
                    <label htmlFor="name">Position:</label><br/>
                    <input  value ={this.position} onChange={this.handleChange} name="name" id="name" />
                    <label htmlFor="name">Nickname:</label><br/>
                    <input  value ={this.nickname}onChange={this.handleChange} name="name" id="name" />
                    <label htmlFor="name">Description:</label><br/>
                    <input  value ={this.description} onChange={this.handleChange} name="name" id="name" />
                </div>

                <div data-testid="errorAlert" className="alert alert-danger" role="alert">Error: </div>
                <button >Submit Smurf</button>
            </form>
        </section>);
    }
}

// const mapStateToProps = state => {
//     return{
//         smurfs: state.smurfs,
//         isFetching: state.isFetching,
//         error: state.error
//     }
// }
//     export default connect(mapStateToProps,{getSmurf})(AddForm);
export default AddForm

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