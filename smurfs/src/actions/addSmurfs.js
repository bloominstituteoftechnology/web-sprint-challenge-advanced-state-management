import axios from 'axios';
export const ADD_SMURF='ADD_SMURF';
export const SMURF_ADDED='SMURF_ADDED';
export const ADD_FAILED='ADD_FAILED';


export const addSmurf=(smurfs)=>dispatch=>{
    dispatch({type: ADD_SMURF});
    // return (
        axios
            .post('http://localhost:3333/smurfs',smurfs)
            .then(res=>
                dispatch({type:SMURF_ADDED, payload:res.data},
                    console.log('here they are',res.data))
                
            )
            .catch(err=>dispatch({
                type:ADD_FAILED,
                payload:err.response.data
               

            }))
    // )

}