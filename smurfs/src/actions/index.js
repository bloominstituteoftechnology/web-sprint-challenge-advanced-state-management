import axios from 'axios';

export const GET_SMURFS_START = 'GET_SMURFS_START';
export const GET_SMURFS_FAILURE = 'GET_SMURFS_FAILURE';
export const GET_SMURFS_SUCCESS = 'GET_SMURFS_SUCCESS';
export const ADD_NEW_SMURF = 'ADD_NEW_SMURF';

export const getSmurfs = ()=> {
    return (dispatch) => {

        dispatch({ type: GET_SMURFS_START });
        axios
            .get('http://localhost:3333/smurfs')
            .then((res) => {
                dispatch({ type: GET_SMURFS_SUCCESS, payload: res.data });
            })
            .catch((err) => {
                 dispatch({type: GET_SMURFS_FAILURE, payload: err.message });   
            })
            
    };
};

export const addNewSmurf = (newSmurf) => {
    return (dispatch) => {
        console.log(newSmurf);
        axios
            .post('http://localhost:3333/smurfs', newSmurf)
            .then((res) => {
                console.log(res);
                dispatch({ type: ADD_NEW_SMURF , payload: res.data, name:newSmurf.name, age:newSmurf.age, height:newSmurf.height })

            })
            .catch((err) => {
                dispatch({type: GET_SMURFS_FAILURE, payload: err.message });   
   })
   }
  };

