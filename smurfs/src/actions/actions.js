import {fetchingStart, fetchingSuccess, fetchingError} from "../reducers/reducer";
import axios from "axios";

export const getData = () => dispatch => {
    dispatch ({type: fetchingStart});
    axios.get("/smurfs")
    .then((res) => {
        console.log("server smurf data: ",res)
    })
    .catch((err) => {
        console.log("server error: ", err);
    })
}