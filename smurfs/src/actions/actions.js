import axios from 'axios';


export const FETCH_START = 'FETCH_START';
export const FETCH_SUCCESS = 'FETCH_SUCCESS';
export const FETCH_FAILURE = 'FETCH_FAILURE';

export const fetchSmurfs = () => dispatch => {
    dispatch({ type: FETCH_START });
    axios.get('http://localhost:3333/smurfs')
        .then((response) => {
            
            dispatch({ type: FETCH_SUCCESS, payload: response.data });
        })
        .catch(error => dispatch({ type: FETCH_FAILURE, payload: error.response }));
}

export const POST_START = 'POST_START';
export const POST_SUCCESS = 'POST_SUCCESS';
export const POST_FAILURE = 'POST_FAILURE';

export const POSTsmurfs = smurf => dispatch => {
    console.log(smurf);
    dispatch({type:POST_START});
    axios.post('/smurfs', smurf)
        .then((response)=>{
            console.log(response)
            dispatch({type: POST_SUCCESS , payload: (smurf)})
        })
    .catch(error => dispatch({type: POST_FAILURE , payload: error.response }))


}