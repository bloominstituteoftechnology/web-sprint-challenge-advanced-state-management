import axios from 'axios';
export const FETCH_SMURFS='FETCH-SMURFS';
export const FETCH_SMURFS_SUCCESS='FETCH_SMURFS_SUCCESS';
export const FETCH_SMURFS_FAILURE='FETCH_SMURFS_FAILURE';
export const getSmurfs=()=>(dispatch)=>{
    dispatch({type:FETCH_SMURFS});
    axios.get('http://localhost:3333/smurfs')
    .then(res=>dispatch({type:FETCH_SMURFS_SUCCESS,payload:res.data}))
    .catch(err=>dispatch({type:FETCH_SMURFS_FAILURE,payload:err}))
}