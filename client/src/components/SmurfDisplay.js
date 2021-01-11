import React from 'react';
import { connect } from "react-redux";
import { fetchSmurf } from "../actions";
import Smurf from "./Smurf";

export class SmurfDisplay extends React.Component {

    componentDidMount() {
        console.log("fetching smurfs")
        this.props.fetchSmurf();
    }

    componentDidUpdate() {
        console.log("In SmurfDisplay", this.props.isLoading);
        console.log(this.props.smurf);
    }

    render() {
        return(
        <div>
            {this.props.isLOading}
        </div>
        )
    }
}

const mapStateToProps = (state) => {
    return {
        smurfs: state.smurf,
        isLoading: state.isLoading,
        error: state.error,
    }
}

const mapDispatchToProps = {fetchSmurf};

export default connect(mapStateToProps, mapDispatchToProps)(SmurfDisplay);

//Task List:
//1. Import in all needed components and library methods.
//2. Connect all needed redux state props and action functions to the component before exporting.
//3. Fetch all smurfs when the component first mounts.
//4. Render loading text or graphic if the application is currently loading.
//5. Render a list of all Smurfs using the Smurf component if the application is not currently loading.