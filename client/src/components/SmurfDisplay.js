import React, {useEffect} from 'react';
import { connect, useDispatch } from "react-redux";
import GetSmurfs from "../actions/GetSmurfs";
import Smurf from "./Smurf"


const mapStateToProps = (state) => {
    return state;
}

const mapDispatchToProps = {GetSmurfs}

function SmurfDisplay(state) {
    const dispatch = useDispatch();
    useEffect(() => {
        dispatch(GetSmurfs)
        console.log(state.smurfs)
    }, [state])
    console.log("state", state.smurfs)

    return (
        <div>
           {state.smurfs.map(smurf => <Smurf data={smurf} />)}
        </div>
    )
}

export default connect(mapStateToProps, mapDispatchToProps)(SmurfDisplay)


//Task List:
//1. Import in all needed components and library methods.
//2. Connect all needed redux state props and action functions to the component before exporting.
//3. Fetch all smurfs when the component first mounts.
//4. Render loading text or graphic if the application is currently loading.
//5. Render a list of all Smurfs using the Smurf component if the application is not currently loading.