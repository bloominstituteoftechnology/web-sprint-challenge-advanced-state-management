import axios from "axios";
import * as actions from "./AddSmurfCreators";

export const UpdateSmurfs =(newSmurf) => (dispatch) => {
    dispatch({type: actions.NEW_SMURF_REQUEST});
    axios.post('http://localhost:3333/smurfs', {
        newSmurf
    })
}