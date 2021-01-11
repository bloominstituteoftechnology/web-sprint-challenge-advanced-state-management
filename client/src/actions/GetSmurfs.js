import axios from 'axios';
import * as actions from "./GetDataCreators.js"

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

const GetSmurfs = (dispatch) => {
    dispatch({type: actions.FETCH_SMURFS});
    axios.get('http://localhost:3333/smurfs')
    .then(res => {
        dispatch({type: actions.FETCH_SMURFS_SUCCESS, payload: res.data})
    })
    .catch( error => {
        dispatch({type: actions.FETCH_SMURFS_FAIL,
            payload:
            error.response && error.response.data.message
              ? error.response.data.message
              : error.message,
        })
    })
}

export default GetSmurfs;