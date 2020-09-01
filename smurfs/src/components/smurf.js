import React,{useState} from 'react';
import { connect } from "react-redux";
import {addSmurfs} from '../actions/getSmurfs';
// import {addSmurf} from '../actions/addSmurfs';


function SmurfInfo({getSmurfs}){
    const defaultState={
        name:'',
        age:'',
        height:''
    }
    const[state,setState]= useState(defaultState)

    
    const fetched=e=>{        
        e.preventDefault()
        setState(defaultState)
        getSmurfs(state);
    }
    // const added=e=>{
    //     props.addSmurf();
    // }

    const changeHandler=e=>{
            setState({...state,
                [e.target.name]: e.tartget.value
            })
    };

    // const formSubmitted=e=>{

    //     getSmurfs(state)
    // };


    // console.log()
    return(
            <form>
                <input type='text' placeholder='name' onChange={changeHandler} name='name' value={state.name}/><br></br>
                <input type='text' placeholder='age' onChange={changeHandler} name='age' value={state.age}/><br></br>
                <input type='text' placeholder='height' onChange={changeHandler} name='height' value={state.height}/><br></br>
                <button onClick={fetched}>get smurfs</button>       
            </form>
            

    )
}

// const mapStateToProps=(state)=>{
//     console.log(state)
//     return{
//         smurfs: state.smurfs,
//         isFetching: state.isFetching,
//         isAdding: state.isAdding,
//         error: state.error
//     };
// }

// const mapDispatchToProps={getSmurf};

export default connect(null,{addSmurfs})(SmurfInfo);