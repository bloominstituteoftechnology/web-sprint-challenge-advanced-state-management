import axios from 'axios'

export const FETCH_SMURFS = "FETCH_SMURFS"
export const FETCH_SMURFS_SUCCESS = "FETCH_SMURFS_SUCCESS"
export const FETCH_SMURFS_ERROR = "FETCH_SMURFS_ERROR"

export const fetchSmurfs = () => {

    return (dispatch) => {
        console.log('Inside dispatch')
        dispatch({type: FETCH_SMURFS})
        axios.get('http://localhost:3333/smurfs')
        .then(response => {
            console.log(response)
            dispatch({ type: FETCH_SMURFS_SUCCESS, payload: [] })
        })
        .catch(error => {
            dispatch({ type: FETCH_SMURFS_ERROR, payload: [] })
            console.error(error)
        })
    }
} 