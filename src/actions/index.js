import axios from "axios";

export const FETCHING_API_START = "FETCHING_API_START";
export const FETCHING_API_SUCCESS = "FETCHING_API_SUCCESS";
export const FETCHING_API_FAILURE = 'FETCHING_API_FAILURE'
export const ADD_SMURF = "ADD_SMURF";
export const ADD_ERROR = "ADD_ERROR";

export const fetchSmurfs = () => (dispatch) => {
    console.log('1. fetch smurf has fired')

  dispatch({ type: FETCHING_API_START });
  axios
    .get("http://localhost:3333/smurfs")
    .then( res => {
      console.log(res)
      dispatch({ type: FETCHING_API_SUCCESS, payload: res.data });
    })
    .catch( error => {
      console.log("2. Error from api failure", error)
      dispatch({ type: FETCHING_API_FAILURE, payload: error });
    });
};


export const addSmurf = (id, name, position, nickname, description ) => (dispatch) => {
    
    const newSmurf = {
        id: id,
        name: name,
        position: position,
        nickname: nickname,
        description: description
    }
    console.log("A new smurf is born!", newSmurf)
    return ({ type: ADD_SMURF, payload: newSmurf})
};

export const setError = (error) => {
    return { 
        type: ADD_ERROR, payload: error
    }
}

//Task List:
//1. Add a thunk action called fetchSmurfs that triggers a loading status display in our application, performs an axios call to retrieve smurfs from our server, saves the result of that call to our state and shows an error if one is made.
//2. Add a standard action that allows us to add new smurf (including the name, nickname, position, summary)
//3. Add a standard action that allows us to set the value of the error message slice of state.
