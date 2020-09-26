import axios from "axios";

export const ADD_SMURF = "ADD_SMURF";

export const addSmurf = (newSmurf) => (dispatch) => {
  console.log(newSmurf);
  axios.post("http//:localhost:3333/smurfs", newSmurf).then((res) => {
    console.log("response from post", res);
  });
};
