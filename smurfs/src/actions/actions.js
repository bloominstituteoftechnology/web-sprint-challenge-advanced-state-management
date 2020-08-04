import axios from 'axios';
export const FETCH_DATA = 'FETCH_DATA';
export const FETCH_SUCCESS = 'FETCH_SUCCESS';
export const FETCH_FAILURE = 'FETCH_FAILURE';
export const POST_DATA = 'POST_DATA'
export const POST_SUCCESS = 'POST_SUCCESS'
export const POST_FAILURE = 'POST_FAILURE'

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



export const postSmurfs = (smurf) => (dispatch) => {
    dispatch({type: POST_DATA})
    axios
    .post('http://localhost:3333/smurfs', smurf)
    .then( res => {
        console.log('Post SUccess!', res.data)
        dispatch({type: POST_SUCCESS, payload: res.data})
    })
    .catch( err => {
        console.log('error posting!',err.data)
        dispatch({type: POST_FAILURE, payload: err.data})
    })
}
