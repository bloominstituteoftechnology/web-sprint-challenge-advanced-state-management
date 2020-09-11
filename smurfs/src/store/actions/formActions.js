import axios from 'axios'

export const ADD_SMURF = 'ADD_SMURF'

export const addSmurf = (newSmurf) => {

    return (dispatch) => {
        axios.post('http://localhost:3333/smurfs')
            .then (res => {
                dispatch({type: ADD_SMURF, payload: newSmurf})
            })
            .catch(err => {
                console.log('OOPS')
            })
    }

}