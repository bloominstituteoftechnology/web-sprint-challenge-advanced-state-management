import axios from 'axios';
export const POST_SMURFS='POST-SMURFS';
export const POST_SMURFS_SUCCESS='POST_SMURFS_SUCCESS';
export const POST_SMURFS_FAILURE='POST_SMURFS_FAILURE';
export const postSmurfs=obj=>(dispatch)=>{
    dispatch({type:POST_SMURFS});
    axios.post('http://localhost:3333/smurfs',obj)
    .then(res=>dispatch({type:POST_SMURFS_SUCCESS,payload:res.data}))
    .catch(err=>dispatch({type:POST_SMURFS_FAILURE,payload:err.response.data.Error},alert(err.response.data.Error),console.log(obj)))
}