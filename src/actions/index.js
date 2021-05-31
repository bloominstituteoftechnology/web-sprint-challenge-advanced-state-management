import axios from 'axios';

export const LOADING = 'LOADING'
export const ADD_SMURF = 'ADD_SMURF'
export const SMURF_SUCCESS = 'SMURF_SUCCESS'
export const ERROR = 'ERROR'

//Task List:
//1. Add a thunk action called fetchSmurfs that triggers a loading status display in our application, performs an axios call to retreive smurfs from our server, saves the result of that call to our state and shows an error if one is made.
//2. Add a standard action that allows us to add new smurf (including the name, nickname, position, summary)
//3. Add a standard action that allows us to set the value of the error message slice of state.

export const fetchSmurfs = () => (dispatch) => {
    dispatch({ type: LOADING })
    axios.get('http://localhost:3333/smurfs')
        .then(res => {
            dispatch({ type: ADD_SMURF, payload: res.data});
            // const refactoredSmurf = {
            //     name: res.data.name,
            //     position: res.data.position,
            //     nickname: res.data.nickname,
            //     summary: res.data.summary,
            //     id: res.data,
                // avatar: 'https://static.wikia.nocookie.net/smurfs/images/d/d0/Hefty-original.png/revision/latest?cb=20130824203920'
            // }
            console.log(res);
            dispatch({ type: SMURF_SUCCESS, payload: res.data.data })
        })
        .catch(error => {
            dispatch({ type: ERROR, payload: { error } })
            console.log({ error })
        })
}
