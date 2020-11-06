import axios from 'axios';

export const GET_SMURFS_SUCCESS = 'GET_SMURFS_SUCCESS'
export const GET_SMURFS_FAILURE = 'GET_SMURFS_FAILURE'
export const POST_SMURFS_SUCCESS = 'POST_SMURFS_SUCCESS'
export const POST_SMURFS_FAILURE = 'POST_SMURFS_FAILURE'

export const getSmurfs = () => {
    return (dispatch) => {
        axios.get('http://localhost:3333/smurfs')
            .then(res => {
                console.log(res)
                dispatch({ type: GET_SMURFS_SUCCESS, payload: res.data })
            })
            .catch(err => {
                console.log(err.message)
                dispatch({ type: GET_SMURFS_FAILURE, payload: err.message })
            })
    }
}

export const postSmurfs = (smurf) => {
    return (dispatch) => {
        axios.post('http://localhost:3333/smurfs', smurf)
            .then(res => {
                console.log(res)
                dispatch({ type: POST_SMURFS_SUCCESS, payload: res.data })
            })
            .catch(err => {
                console.log(err.message)
                dispatch({ type: POST_SMURFS_FAILURE, payload: err.message })
            })
    }
}