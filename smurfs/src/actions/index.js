import axios from "axios";

export const LOADING = "LOADING";
export const SUCCESS = "SUCCESS";
export const ERROR = "ERROR";



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