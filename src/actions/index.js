import axios from 'axios';

export const fetchGuests = () => {
    return (dispatch) => {
        dispatch(fetchStart())

        axios.get('http://localhost:3333/guests')
            .then( res => {
                dispatch(fetchSuccess(res.data))
            })
            .catch( err => {
                dispatch(fetchError('Could not fetch guests'))
            })
    }
}

export const FETCH_START = "FETCH_START";

export const fetchStart = () => {
    return({type: FETCH_START});
}

export const FETCH_SUCCESS = "FETCH_SUCCESS";

export const fetchSuccess = (guests)=> {
    return({type: FETCH_SUCCESS, payload:guests});
}

export const FETCH_ERROR = "FETCH_ERROR";

export const fetchError = (errorMessage)=> {
    return({type: FETCH_ERROR, payload: errorMessage});
}

export const ADD_GUEST = "ADD_GUEST"

export const addGuest = (guest) => {
    return {type: ADD_GUEST, payload: guest}
}

export const SET_ERROR = "SET_ERROR"

export const setError = (error) => {
    return {type: SET_ERROR, payload: error}
}