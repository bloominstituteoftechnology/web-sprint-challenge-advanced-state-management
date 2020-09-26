import axios from 'axios';

export const ACTIONS = {
    AXIOS_GET_START: 'AXIOS_GET_START',
    AXIOS_GET_SUCCESS: 'AXIOS_GET_SUCCES',
    AXIOS_GET_FAIL: 'AXIOS_GET_FAIL'
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