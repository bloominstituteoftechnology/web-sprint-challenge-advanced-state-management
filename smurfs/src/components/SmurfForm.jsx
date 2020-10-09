
import React, {useState} from 'react'
import {connect} from 'react-redux';
import {postSmurf} from '../actions/index.js' 

const SmurfForm = (props) => {
    const [smurf, setSmurf] = useState({
        name: '',
        age: 0,
        height: ''
    })
  

    const submitHandler = (e) => {
        e.preventDefault()
        props.postSmurf(smurf)
        document.getElementById('smurfform').reset()
      }
  
      const inputHandler = (e) =>{
        e.preventDefault()
        setSmurf({...smurf, [e.target.name]: e.target.value })
      }

        return(
            <div>
                <h3>Smurf Form</h3>
                <form onSubmit={submitHandler} id="smurfform">
                <input
      name="name"
      value={props.name}
      type="text"
      placeholder=""
      onChange={inputHandler} 
      />
      <input
      name="age"
      value={props.age}
      type="text"
      placeholder=""
      onChange={inputHandler}
      />
      <input
      name="height"
      value={props.height}
      type="text"
      placeholder=""
      onChange={inputHandler}
      />
      <button>Add Smurf!</button>  
                </form>
            </div>
        )

}

const mapStateToProps = state => {
    return{
        smurfs: state.smurfs,
        errors: state.errors
    }
}
export default connect(mapStateToProps, {postSmurf})(SmurfForm)
