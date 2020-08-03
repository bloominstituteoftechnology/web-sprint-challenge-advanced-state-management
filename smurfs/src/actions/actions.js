import axios from 'axios'

export const FETCH_DATA = 'FETCH_DATA';
export const FETCH_SUCCESS = 'FETCH_SUCCESS';
export const FETCH_FAIL = 'FETCH_FAIL';
export const POST_DATA = 'POST_DATA';
export const POST_SUCCESS = 'POST_SUCCESS';
export const POST_FAIL = 'POST_FAIL';


export const fetchSmurf = () => (dispatch) => {
console.log('fetchUseEffectyeaahhhh')
    dispatch({type:FETCH_DATA})

axios
.get('http://localhost:3333/smurfs')
.then(res => {
    console.log('response get', res.data)
    dispatch({type:FETCH_SUCCESS, payload:res})
})
.catch(err => {
    console.log('error:', err)
    dispatch({type:FETCH_FAIL})
})
}

export const postSmurf = (theSmurf) => (dispatch) => {
    console.log('postsubmit!!!!')
    dispatch({type: POST_DATA})
    axios.post('http://localhost:3333/smurfs', theSmurf)
        .then(res => {
            console.log('responsepose', res)
            dispatch({type:POST_SUCCESS, payload:res.data})
        })
        .catch(err => {
            console.log('posterror', err)
        })
}