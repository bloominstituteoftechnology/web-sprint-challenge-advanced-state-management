import React , {useState} from 'react' 
import {connect} from 'react-redux'
import axios from 'axios';
import {fetchSmurfs} from '../actions/actions'


 const initialState = {
     name: "",
     age:"",
     height:"",
 }

const SmurfForm = props => {
 const [newSmurf , setNewSmurf] = useState(initialState)

 const postNewSmurf = () =>{
    axios.post('http://localhost:3333/smurfs',{
        name: newSmurf.name,
        age: newSmurf.age,
        height: newSmurf.height,
     })
    .then(response =>{
        props.fetchSmurfs()
    })
   
}



  const  handleChanges = e => {
        setNewSmurf({ ...newSmurf, [e.target.name]: e.target.value });
     
      };
    
    const  handleSubmit =  e =>{
            e.preventDefault()
            postNewSmurf(newSmurf)
            setNewSmurf(initialState)


     }

 return (
        <form onSubmit={handleSubmit}>
            <input
            type='text'
            name= 'name'
            value={newSmurf.name}
            placeholder="Add a name "
            onChange={handleChanges}
            />
            <input
            type='text'
            name= 'age'
            value={newSmurf.age}
            placeholder= "Add an age"
            onChange={handleChanges}
            />
            <input
            type='text'
            name= 'height'
            value={newSmurf.height}
            placeholder="Add a height"
            onChange={handleChanges}
            />
            <button>Add Smurf</button>
        </form>
    )
}

const mapStateToProps = state => {
    return {
        isLoading: state.isLoading, 
        smurfs: state.smurfs, 
        error: state.error
    }
}

export default connect(mapStateToProps,{fetchSmurfs})(SmurfForm); 