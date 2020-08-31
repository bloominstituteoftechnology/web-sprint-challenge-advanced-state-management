import axios from 'axios';

export const ADD_SMURF = "ADD_SMURF";
export const FETCH_SMURF = "FETCH_SMURF";
export const FETCHING_SMURF_ERROR = "FETCING_SMURF_ERROR";
export const FETCHING_SMURF_SUCCESS = "FETCHING_SMURF_SUCCESS";

export const getSmurf = () => (dispatch) => {
    console.log('get smurf action');
    dispatch({ type: FETCH_SMURF });
    axios
        .get('http://localhost:3333/smurfs')
        .then((res) => {
            dispatch({ type: FETCHING_SMURF_SUCCESS, payload: res});
            console.log('API RESPONSE', res);
        })
        .catch((err) => {
            dispatch({
                type: FETCHING_SMURF_ERROR, payload: `${err.response.message} code: ${err.response.code}`
            });
            console.log(err);
        
        });

        
};
        


