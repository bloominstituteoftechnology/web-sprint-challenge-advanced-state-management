import axios from 'axios';
// actions
export const FETCH_SMURF_DATA = 'FETCH_SMURF_DATA_';
export const ADD_SMURF_SUCCESS = 'ADD_SMURF_SUCCESS';
export const SMURF_DATA_FAILURE = 'SMURF_DATA_FAILURE';
export const ADD_SMURF = 'ADD_SMURF';

export const getSmurfs = () =>(dispatch) =>{
    dispatch({type:FETCH_SMURF_DATA});

    axios
    .get(`http://localhost:3333/smurfs`)

    .then((res) => {
        console.log(res);

        dispatch({type: ADD_SMURF_SUCCESS, payload: res})
    })

    .catch((err) => {
        console.log(err);
        
        dispatch( {type: SMURF_DATA_FAILURE, payload: err})
 })
 
}

 export const addNewSmurf =(smurf)=>{
    return {type: ADD_SMURF, payload: smurf}
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