import React from 'react';
import { connect } from "react-redux";
import { fetchSmurfs } from "../actions";
import  Smurf  from "./Smurf";

export class SmurfDisplay extends React.Component {

    componentDidMount() {
        this.props.fetchSmurfs();
    }

    render() {
        return (
        <div>{this.props.isLoading ? <p>The Smurfs are heading this way!</p>: <div>
           {this.props.smurfs.map(smurf => (<Smurf key={smurf.id} smurf={smurf} />))}
        </div>}
      </div>)
    }
}

const mapStateToProps = (state) => {
    return {
        smurfs: state.smurfs,
        isLoading: state.loading, 
        error: state.error
    }
}

const mapDispatchToProps = { fetchSmurfs };

export default connect(mapStateToProps, mapDispatchToProps)(SmurfDisplay);

//Task List:
//1. Import in all needed components and library methods.
//2. Connect all needed redux state props and action functions to the component before exporting.
//3. Fetch all smurfs when the component first mounts.
//4. Render loading text or graphic if the application is currently loading.
//5. Render a list of all Smurfs using the Smurf component if the application is not currently loading.