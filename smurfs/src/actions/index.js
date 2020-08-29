import axios from 'axios';
export const FETCH_SMURF='FETCH_SMURF';
export const SMURF_FETCHED='SMURF_FETCHED';
export const FETCH_FAILED='FETCH_FAILED';


export const getSmurf=(props)=>{
    // console.log(123)
    return (dispatch)=>{
            dispatch({type: FETCH_SMURF});
    console.log(dispatch)
    axios
        .get('http://localhost:3008/smurfs')
        .then(res=>
            dispatch({type:SMURF_FETCHED, payload:res.data},
                console.log(res.data))
            
        )
        .catch(err=>dispatch({
            type:FETCH_FAILED,
            payload:err

        }))
    }

}