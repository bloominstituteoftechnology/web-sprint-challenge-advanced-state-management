import axios from 'axios';

export const FETCH_X_START = 'FETCH_X_START';
export const FETCH_X_SUCCESS = 'FETCH_X_SUCCESS';
export const FETCH_X_FAILURE = 'FETCH_X_FAILURE';

export const getX = () => dispatch => {
    dispatch({type: FETCH_X_START})
    axios
        .get('http://localhost:3333/smurfs')
        .then(res => {
            console.log(res.data);
            dispatch({ 
                type: FETCH_X_SUCCESS, 
                payload: res.data
            });
        })
        .catch(err => {
            // console.log(err.response);
            dispatch({ 
                type: FETCH_X_FAILURE, 
                payload: `Error: ${err.response}`
            });
        });
};