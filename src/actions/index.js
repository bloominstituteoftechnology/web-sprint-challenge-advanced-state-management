import axios from 'axios';


export const FETCHING_START = 'FETCHING_START'
export const FETCHING_SUCCESS = 'FETCHING_SUCCESS'
export const FETCHING_FAILURE = 'FETCHING_FAILURE'
export const ADDING_SMURF = 'ADDING_SMURF'
export const DISPLAY_ERROR = 'DISPLAY_ERROR'



export const fetchSmurfs = () => (dispatch) => {
  dispatch({ type: FETCHING_START })
  
  axios
  .get(`http://localhost:3333/smurfs`)
  .then(res => {
    dispatch({ type: FETCHING_SUCCESS, payload: res.data })
  })
  .catch(err => {
    console.log('failure to load', err)
    dispatch({ type: FETCHING_FAILURE, payload: err })
  })
}

export const addSmurf = (name, position, nickname, description) => {
  const newSmurf = {
    id: Date.now(),
    name: name,
    position: position,
    nickname: nickname,
    description: description
  }

  return ({ type: ADDING_SMURF, payload: newSmurf })
}

export const displayError = (error) => {
  return ({ type: DISPLAY_ERROR, payload: error })
}


//Task List:
//1. Add a thunk action called fetchSmurfs that triggers a loading status display in our application, performs an axios call to retreive smurfs from our server, saves the result of that call to our state and shows an error if one is made.
//2. Add a standard action that allows us to add new smurf (including the name, nickname, position, summary)
//3. Add a standard action that allows us to set the value of the error message slice of state.