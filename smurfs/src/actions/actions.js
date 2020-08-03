import axios from 'axios';
export const FETCH_DATA = 'FETCH_DATA';
export const FETCH_SUCCESS = 'FETCH_SUCCESS';
export const FETCH_FAILURE = 'FETCH_FAILURE';

export const fetchSmurfs = () => (dispatch) => {
    dispatch({type: FETCH_DATA})
    axios
        .get('http://localhost:3333/smurfs')
        .then(res=>{
            console.log('fetch success', res.data);
            dispatch( {type: FETCH_SUCCESS, payload: res.data} )
        })
        .catch(err=>{
            console.log('fetch failure', err)
            dispatch( {type: FETCH_FAILURE, payload: err} )
        })
}
