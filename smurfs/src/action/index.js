import axios from 'axios';

export const FETCH_SMURFS_START = 'FETCH_SMURFS_START';
export const FETCH_SMURFS_SUCCESS = 'FETCH_SMURFS_SUCCESS';
export const FETCH_SMURFS_FAIL = 'FETCH_SMURFS_FAIL';


export const getSmurfs = () => dispatch => { 
    dispatch({type: FETCH_SMURFS_START})
        axios.get('http://localhost:3333/smurfs')
        .then((response) => { 
            //console.log("Res",response.data)
            dispatch({type:FETCH_SMURFS_SUCCESS, payload: response.data})
        })
        .catch((error) => { 
            console.log("There was an error retreving the data from the server", error)
        })
}