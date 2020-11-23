import axios from "axios";

export const GET_START = "GET_START"
export const GET_SUCCESS = "GET_SUCCESS"
export const GET_FAILURE = "GET_FAILURE"

export const POST_START = "POST_START"
export const POST_SUCCESS = "POST_SUCCESS"
export const POST_FAILURE = "POST_FAILURE"

export const getSmurfData = () => {
    return (dispatch) => {
        dispatch({ type: GET_START })
        axios
            .get('http://localhost:3333/smurfs')
            .then(res => {
                console.log(res)
                dispatch({ type: GET_SUCCESS, payload: res.data })
            })
            .catch(err => {
                console.log(err.message)
                dispatch({ type: GET_FAILURE, payload: err.message})
            })
    }
}

export const postSmurfData = (smurf) => {
    return (dispatch) => {
        dispatch({ type: POST_START })
        axios
            .post('http://localhost:3333/smurfs', smurf)
            .then(res => {
                console.log(res)
                dispatch({ type: POST_SUCCESS, payload: res.data })
            })
            .catch(err => {
                console.log(err.message)
                dispatch({ type: POST_FAILURE, payload: err.message })
            })
    }
}