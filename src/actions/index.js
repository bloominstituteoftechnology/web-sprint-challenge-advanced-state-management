import axios from 'axios';

export const FETCH_SMURFS_REQUEST = 'FETCH_SMURFS_REQUEST';
export const FETCH_SMURFS_FAILURE = 'FETCH_SMURFS_FAILURE';
export const FETCH_SMURFS_SUCCESS = 'FETCH_SMURFS_SUCCESS';
export const ADD_SMURFS = 'ADD_SMURFS';


export const fetchSmurfRequest = () =>{
    return{
        type: FETCH_SMURFS_REQUEST,
        loading: true
    }
}

export const fetchSmurfFailure = (error) =>{
    return{
        type: FETCH_SMURFS_FAILURE,
        payload: error
    }
}

export const fetchSmurfSucess = (smurfs) =>{
    return{
        type: FETCH_SMURFS_SUCCESS,
        payload: smurfs
    }
}

export const addSmurf = (smurf) => {
    return{
        type: ADD_SMURFS,
        payload: smurf
    }
}


export const fetchSmurfs = () => {
    return(dispatch) => {
        dispatch(fetchSmurfRequest());
        axios.get("http://localhost:3333/smurfs")
             .then( res => {
                 const smurfs = res.data;
                 console.log(smurfs);
                 dispatch(fetchSmurfSucess(smurfs));
                }
             )
             .catch( err => {
                 const error = err.message;
                 dispatch(fetchSmurfFailure(error));
                }
             );
    }
}

export const postSmurf = (smurf) => {
    return(dispatch) => {
        axios.post("http://localhost:3333/smurfs", smurf)
             .then( res => {
                 dispatch(fetchSmurfSucess(res.data))
                }
             )
             .catch( err => {
                 const error = err.response.data.Error;
                 console.log(err.response.data.Error);
                 dispatch(fetchSmurfFailure(error));
                }
             );
    }
}

//Task List:
//1. Add fetch smurfs action: 
//              - fetch and return initial list of smurfs
//              - dispatch actions that indicate if we are waiting for a server response
//              - dispatch an error text action if an error is returned from the server
//2. Add add smurf action:
//              - dispatch an error text action if smurf data does not includes a name, nickname and position field
//              - send a post request with the smurf as body to see if there is an error
//              - dispatch add smurf action if request is successful
//              - dispatch an error text action if an request returns an error
//3. Add set error text action:
//              - return action object setting error text
//4. Any other actions you deem nessiary to complete application.