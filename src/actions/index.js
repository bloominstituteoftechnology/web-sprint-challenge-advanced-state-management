import axios from 'axios';


export const ADD_SMURFS_START = 'ADD_SMURFS_START';
export const ADD_SMURFS_SUCCESS = 'ADD_SMURFS_SUCCESS';
export const ADD_SMURFS_FAIL = 'ADD_SMURFS_FAIL';

export const FETCH_SMURFS_START = 'FETCH_SMURFS_START';
export const FETCH_SMURFS_SUCCESS = 'FETCH_SMURFS_SUCCESS';
export const FETCH_SMURFS_FAIL = 'FETCH_SMURFS_FAIL';

export const addSmurfs = () => dispatch => {
  // dispatch({ type: ADD_SMURFS_START});
  console.log('addSmurfs is starting');
  axios.post('http://localhost:3333/smurfs', {name: 'Leah', nickname: 'none', description: ''})
    .then(res => {
      console.log(res.data);
      dispatch({ type: ADD_SMURFS_SUCCESS, payload: res.data})
    })
    .catch(err => {
      console.log(err.message);
      dispatch({ type: ADD_SMURFS_FAIL, payload: err})
    })

}

export const fetchSmurfs = () => dispatch => {
  dispatch({ type: FETCH_SMURFS_START});
  axios.get('http://localhost:3333/smurfs')
    .then(res => {
      dispatch({ type: FETCH_SMURFS_SUCCESS, payload: res.data})
    })
    .catch(err => {
      console.log(err);
      dispatch({ type: FETCH_SMURFS_FAIL, payload: err})
    })
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