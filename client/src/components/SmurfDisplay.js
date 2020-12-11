import React from 'react';
import { connect } from "react-redux";

import {findSmurf } from "../actions/index";

import Smurf from "./Smurf";

export class SmurfDisplay extends React.Component {
    componentDidMount() {
        this.props.getSmurfs();
    }

    render() {

        if (this.props.isLoading) {
            return <h2>Loading </h2>
        }
        
        else if (this.props.error) {
            return <h2>Erro {this.props.error}</h2>
        }

       else return (<div>
            {
                this.props.smurfs.map(smurf => {
                    return <Smurf smurf={smurf} key={smurf.id} />
                })
            }
        </div>)
    }
}

const mapStateToProps = state => {
    return {
        smurfs: state.smurfs,
        isLoading: state.isLoading,
        error: state.error
    }
}

//gh

export default connect(mapStateToProps, {findSmurf})(SmurfDisplay);


//Task List:
//1. Import in all needed components and library methods.
//2. Connect all needed redux state props and action functions to the component before exporting.
//3. Fetch all smurfs when the component first mounts.
//4. Render loading text or graphic if the application is currently loading.
//5. Render a list of all Smurfs using the Smurf component if the application is not currently loading.