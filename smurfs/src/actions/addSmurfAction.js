import axios from 'axios';


export const ADD_SMURF_START = 'ADD_SMURF';
export const ADD_SMURF_SUCCESS = 'ADD_SMURF_SUCCESS';
export const ADD_SMURF_FAILURE = 'ADD_SMURF_FAILURE';


export const addSmurf = (newSmurf) => dispatch => {
    console.log('new smurf from addSmurf', newSmurf)
    dispatch({type: ADD_SMURF_START});
    axios
    .post(`http://localhost:3333/smurfs`,
         newSmurf

    )
    .then(res => {
        console.log('Here is the res from addSmurf', res.data)
        dispatch({type: ADD_SMURF_SUCCESS, payload: res.data} )
    })
    .catch(err => {
        dispatch({type: ADD_SMURF_FAILURE, payload: err.data})
        console.log(err.data)
    })
}

export default addSmurf;