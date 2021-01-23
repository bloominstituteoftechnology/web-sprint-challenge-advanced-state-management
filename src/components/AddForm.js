import React from 'react';
import { connect } from "react-redux";
import { putSmurfData } from "../actions";


    class AddForm extends React.Component {

        State = {
            newSmurf:"",
            description:"",
            nickname:"",
            name:"",
            id:Date.now(),
            position:""

        }

      handleChange = (e) => {
            this.setState ={newSmurf:e.target.value}

        }

        onSubmit = () =>{
            putSmurfData()
        }

    render() {
        return (
            <section>
            <h2>Add Smurf</h2>
            <form onSubmit={this.onSubmit}>
              <div className="form-group">
                <label htmlFor="name">Name:</label>
                <br />
                <input onChange={this.handleChange} name="name" id="name" />
                <label htmlFor="description">Description:</label> <br />
                <input
                  onChange={this.handleChange}
                  name="description"
                  id="description"
                />
                <label htmlFor="nickname">NickName:</label>
                <br />
                <input
                  onChange={this.handleChange}
                  name="nickname"
                  id="description"
                />
                <label htmlFor="position">Position:</label>
                <br />
                <input onChange={this.handleChange} name="position" id="position" />
              </div>
    
              <div
                data-testid="errorAlert"
                className="alert alert-danger"
                role="alert"
              > 
              {this.props.isLoading ? <p>Loading Smurfs...</p> : null }
    
                Error:{this.props.error? <p style={{color: "red"}}>{this.props.error}</p> : null } 
    
              </div>
              <button>Submit Smurf</button>
            </form>
          </section>
        )
    }
}

const mapStateToProps = (state) =>{
    return{
        newSmurf:state.newSmurf,

    }
}

export default connect(mapStateToProps,{})(AddForm)