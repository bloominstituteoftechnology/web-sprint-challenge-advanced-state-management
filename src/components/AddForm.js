import React from 'react';
import { connect } from "react-redux";
import { putSmurfData } from "../actions";


    class AddForm extends React.Component {
      constructor(props){
        super(props)
       this.State = {
          
          
          name: "",
          nickname:"",
          position:"",
          id:Date.now(),
          description:""
         
      }
      }

    

        

            handleChange = (event,value) => {
              this.setState ({...this.state,
            [event.target.name]  : value       })
            
            
              
            
            }
          
            

        onSubmit = (e) =>{
          this.setState({...this.state})
          e.preventDefault()
          this.props.putSmurfData()
          console.log(this.props)
          // alert (`${this.state.position} ${this.state.name} ${this.state.description} ${state.nickname}`)
        }

    render() {
      console .log(this.state)
        return (
            <section>
            <h2>Add Smurf</h2>
            <form onSubmit={this.onSubmit}>
              <div className="form-group">
                <label htmlFor="name">Name:</label>
                <br />
                <input onChange={this.handleChange} name="name" id="name"  />
                <label htmlFor="description">Description:</label> <br />
                <input
                  onChange={this.handleChange}
                  name="description"
                  id="description"
                  value={state.description}
                  
                  />
                <label htmlFor="nickname">NickName:</label>
                <br />
                <input
                  onChange={this.handleChange}
                  name="nickname"
                  id="nickname"
                  value={this.state.nickname}
                  
                
                  
                  
                />
                <label htmlFor="position">Position:</label>
                <br />
                <input onChange={this.handleChange} name="position" id="position" value= {this.state.position}/>
                 />
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



 export default connect(null,{putSmurfData})(AddForm)