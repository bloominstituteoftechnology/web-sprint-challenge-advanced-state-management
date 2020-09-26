import axios from 'axios';

export const ACTIONS = {
    AXIOS_GET_START: 'AXIOS_GET_START',
    AXIOS_GET_SUCCESS : 'AXIOS_GET_SUCCESS',
    AXIOS_GET_FAIL: 'AXIOS_GET_FAIL',
    UPDATE_SMURF_START: 'UPDATE_SMURF_START',
    UPDATE_SMURF_SUCESS: 'UPDATE_SMURF_SUCESS',
    UPDATE_SMURF_FAIL: 'UPDATE_SMURF_FAIL'
}

export const getSmurfData = () => (dispatch) => {
    dispatch({
        type: ACTIONS.AXIOS_GET_START
    })
    setTimeout(() => {
        axios.get('http://localhost:3333/smurfs/')
            .then(res => {
                console.log('AXIOS SUCESS', res)
                dispatch({
                    type:ACTIONS.AXIOS_GET_SUCCESS,
                    payload: res.data
                })
            })
            .catch(err => {
                console.log('AXIOS ERROR', err)
                dispatch({
                    type: ACTIONS.AXIOS_GET_FAIL,
                    payload: err.message
                })
            })
    }, 3000)
 
}

export const updateSmurfData = (smurf) => (dispatch) => {
    dispatch({
        type: ACTIONS.UPDATE_SMURF_START,
    })
    axios
        .post('http://localhost:3333/smurfs/', smurf)
        .then(res => {
            console.log(res)
            dispatch({
                type: ACTIONS.UPDATE_SMURF_SUCESS
            })
            
        })
        .catch(err => {
            console.log(err)
            dispatch({
                type: ACTIONS.UPDATE_SMURF_FAIL,
                payload: err.message
            })
        })

}