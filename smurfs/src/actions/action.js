import axios from 'axios';
import Axios from 'axios';
export const FETCH_SMURF_START = 'FETCH_SMURF_START';
export const FETCH_SMURF_SUCCESS = 'FETCH_SMURF_SUCCESS';
export const FETCH_SMURF_FAIL = 'FETCH_SMURF_FAIL';
export const POST_SMURF_START = "POST_SMURF_START";
export const POST_SMURF_SUCCESS= "POST_SMURF_SUCCESS";


export const getSmurfs = () => dispatch => {
    dispatch({ type: FETCH_SMURF_START });
    axios.get('http://localhost:3333/smurfs')
    .then(res => {
        console.log(res.data);
        dispatch({ type: FETCH_SMURF_SUCCESS, payload: res.data })
    })
    .catch(err => {
        console.log(err);
        dispatch({ type: FETCH_SMURF_FAIL, payload: {err} })
    })
};

export const postSmurf = smurfs => dispatch => {
    dispatch({type: POST_SMURF_START});
        Axios.post('http://localhost:3333/smurfs', smurfs)
        .then((res) => {
            console.log(res);
            dispatch({
                type: POST_SMURF_SUCCESS,
                payload: res
            })
        })
        .catch((error) => console.log(error))
}