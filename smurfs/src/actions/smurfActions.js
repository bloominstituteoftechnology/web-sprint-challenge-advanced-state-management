import axios from 'axios';

export const FETCH_SMURFS_START = 'FETCH_SMURFS_START';
export const FETCH_SMURFS_SUCCESS = 'FETCH_SMURFS_SUCCESS';
export const POST_SMURF_START = 'POST_SMURF_START';
export const POST_SMURF_SUCCESS = 'POST_SMURF_SUCCESS';


export const ON_NAME_INPUT_CHANGE = 'ON_NAME_INPUT_CHANGE';
export const ON_AGE_INPUT_CHANGE = 'ON_AGE_INPUT_CHANGE';
export const ON_HEIGHT_INPUT_CHANGE = 'ON_HEIGHT_INPUT_CHANGE';


export const fetchSmurfs = () => {
    return dispatch => {
        dispatch({ type: FETCH_SMURFS_START });
        axios
            .get('http://localhost:3333/smurfs')
            .then(res => {
                console.log(res.data)
                dispatch({ type: FETCH_SMURFS_SUCCESS, payload:res.data });
            })
            .catch(err => console.log("error"));
    };
};

export const postSmurf = (smurf) => {
    return dispatch => {
        dispatch({ type: POST_SMURF_START });
        axios
            .post('http://localhost:3333/smurfs', smurf)
            .then(res => {
                dispatch({ type: POST_SMURF_SUCCESS, payload: res.data });
            })
            .catch(err => console.log("error"))
    }
}
export const onNameInputChange = (event) => {
    event.preventDefault();
    
    return {
        type: ON_NAME_INPUT_CHANGE,
        payload: event
    };
};
export const onAgeInputChange = (event) => {
    event.preventDefault();

    return {
        type: ON_AGE_INPUT_CHANGE,
        payload: event
    };
};
export const onHeightInputChange = (event) => {
    event.preventDefault();

    return {
        type: ON_HEIGHT_INPUT_CHANGE,
        payload: event
    };
};