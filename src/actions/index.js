import axios from 'axios';

export const GET_SMURF_START = "GET_SMURF_START"
export const GET_SMURF_SUCCESS = "GET_SMURF_SUCCESS"
export const GET_SMURF_FAIL = "GET_SMURF_FAIL"

export const POST_SMURF_START = "POST_SMURF_START"
export const POST_SMURF_SUCCESS = "POST_SMURF_SUCCESS"
export const POST_SMURF_FAIL = "POST_SMURF_FAIL"
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

export const getSmurf = () => (dispatch) => {
    dispatch({type: GET_SMURF_START});
        axios  
            .get('http://localhost:3333/smurfs')
            .then((res) => {
                dispatch({type: GET_SMURF_SUCCESS, payload: res.data})
            })
            .catch(err => {
                dispatch({type: GET_SMURF_FAIL, payload: err.response})
            })
}

export const postSmurf = (newSmurf) =>  (dispatch) => {
    dispatch({type: POST_SMURF_START});
        axios  
            .post('http://localhost:3333/smurfs', newSmurf)
            .then((res) => {
                console.log(res)
                dispatch({type: POST_SMURF_SUCCESS, payload: res.data})
            })
            .catch(err => {
                dispatch({type: POST_SMURF_FAIL, payload: err.message})
            })
}