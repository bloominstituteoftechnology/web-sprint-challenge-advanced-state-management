import axios from "axios";

export const LOADING = "LOADING";
export const SUCCESS = "SUCCESS";
export const ERROR = "ERROR";
export const ADD_SMURF = "ADD_SMURF"



export const displaySmurfs = () => (dispatch) => {
dispatch( {type: LOADING} )

axios.get("http://localhost:3333/smurfs")
.then(res => {
    console.log(res.data)
    dispatch({
        type: SUCCESS,
        payload: res.data})
})
.catch((err) => {
    dispatch({
        type: ERROR,
        payload: 'error loading data'})
})

}

export const postSmurfs = (smurf) => (dispatch) => {

    axios.post("http://localhost:3333/smurfs", "smurf")
    .then(res => {
        console.log(res)
        dispatch({
            type: ADD_SMURF,
            payload: res.data
        })
        .catch((err)=> {
            dispatch({
                type: ERROR,
                 payload: 'error loading data' 
            })
        })
    })
}