import axios from 'axios'
export const FOUND_SMURF = 'FOUND_SMURF'
export const SMURF_NOT_FOUND = 'SMURF_NOT_FOUND'
export const MAKE_SMURF = 'MAKE_SMURF'
export const SMURF_NOT_MADE = 'SMURF_NOT_MADE'


export const findingSmurf = () => {
    return (dispatch) => {
        axios
            .get('http://localhost:3333/smurfs')
            .then((res) => {
                dispatch({ type: FOUND_SMURF, payload: res.data });

            })
            .catch((err) => {
                dispatch({ type: SMURF_NOT_FOUND, payload: err.message })
            });
    }
}

export const makingSmurf = (smurf) => {
    return (dispatch) => {
        axios
            .post('http://localhost:3333/smurfs', smurf)
            .then((res) => {
                dispatch({ type: MAKE_SMURF, });

            })
            .catch((err) => {
                dispatch({ type: SMURF_NOT_MADE, payload: err.message })
            });
    }
}