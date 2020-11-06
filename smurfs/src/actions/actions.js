import {fetchingStart, fetchingSuccess, fetchingError} from "../reducers/reducer";
import {addSmurfStart, addSmurfSuccess, addSmurfErorr} from "../reducers/reducer";
import axios from "axios";

export const addNewSmurf = (newSmurf) => dispatch => {
    dispatch({type: addSmurfStart});
    axios.post('http://localhost:3333/smurfs', newSmurf)
    .then((res) => {
        console.log("post request res: ", res.data);
        dispatch({type: addSmurfSuccess, payload: res.data});
    })
    .catch((err) => {
        console.log("post request err: ", err);
        dispatch({type: addSmurfErorr, payload: err.response})
    })
} 

export const getData = () => dispatch => {
    dispatch ({type: fetchingStart});
    axios.get("http://localhost:3333/smurfs")
    .then((res) => {
        //const resArray = res.data.splice(",");
        //console.log("resArray: ",resArray);
        console.log("server smurf data: ",res.data);
        dispatch({type: fetchingSuccess, payload: res.data})
    })
    .catch((err) => {
        console.log("server error: ", err);
        dispatch({type: fetchingError, payload: err.response});
    })
}