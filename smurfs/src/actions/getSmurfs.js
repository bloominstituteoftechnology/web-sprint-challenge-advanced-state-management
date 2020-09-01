import axios from 'axios';
export const FETCH_SMURF='FETCH_SMURF';
export const SMURF_FETCHED='SMURF_FETCHED';
export const FETCH_FAILED='FETCH_FAILED';
export const ADD_SMURF='ADD_SMURF';
export const SMURF_ADDED='SMURF_ADDED';
export const ADD_FAILED='ADD_FAILED';


export const getSmurfs=()=>dispatch=>{

    dispatch({type: FETCH_SMURF});
    // console.log(dispatch)
    axios
        .get('http://localhost:3333/smurfs')
        .then(res=>
            dispatch({type:SMURF_FETCHED, payload:res.data},
                console.log('heres',res.data)
            )     
            )
        .catch(err=>
            dispatch({
            type:FETCH_FAILED,
            payload:err.response.data })
            // console.log(err.data)
       )
}            
    export const addSmurfs=(smurfs)=>dispatch=>{

        dispatch({type: ADD_SMURF});
        axios
        .post('http://localhost:3333/smurfs',{
            name:smurfs.name,
            age:smurfs.age,
            height:smurfs.height,
    })
        .then(res=>
            dispatch({type:SMURF_ADDED, payload:res.data},
                console.log('here they are',res.data))
            
        )
        .catch(err=>dispatch({
            type:ADD_FAILED,
            payload:err.response.data
            

        }))
    }
