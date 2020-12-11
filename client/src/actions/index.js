import axios from 'axios';

//Task List:
//1. Add fetch smurfs action: 
//              - fetch and return initial list of smurfs
export const FETCHING_SMURF_START = 'FETCHING_SMURF_START';
export const FETCHING_SMURF_SUCCESS = 'FETCHING_SMURF_SUCCESS';
export const FETCHING_SMURF_FAIL = 'FETCHING_SMURF_FAIL';
//              - dispatch actions that indicate if we are waiting for a server response
export const getSmurf = () => {
    return (dispatch => {

        dispatch({type:FETCHING_SMURF_START});

        axios
            .get(`localhost:3333/smurfs`)
          .then(res => {
              console.log(res)
                dispatch({type:FETCHING_SMURF_SUCCESS, payload:res.data.smurfs});
            })
//              - dispatch an error text action if an error is returned from the server
                  .catch(err => {
                dispatch({type:FETCHING_SMURF_FAIL, payload: err.response.message});
            });
    });
}
//2. Add add smurf action:
//              - dispatch an error text action if smurf data does not includes a name, nickname and position field
//              - send a post request with the smurf as body to see if there is an error
//              - dispatch add smurf action if request is successful
//              - dispatch an error text action if an request returns an error
//3. Add set error text action:
//              - return action object setting error text
//4. Any other actions you deem nessiary to complete application.