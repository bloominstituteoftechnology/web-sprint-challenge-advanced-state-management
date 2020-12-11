import React from 'react';
import {connect} from 'react-redux';
import {getSmurfs} from '../actions/index';
import Smurf from '../components/Smurf';
export class SmurfDisplay extends React.Component {
    state = {
        smurfs: this.props.smurfs,
        error: this.props.error,
        appLoading: this.props.appLoading

    }
   componentDidMount(props){
       props.getSmurfs()
   }
    render() {
    {this.props.smurfs ? <div>{this.props.smurfs.map((item)=>{<Smurf key={item.id} smurfs={item.smurfs}/>})}</div> : <div><h2>No Smurfs to display</h2></div> }
        return(
            
        )
    }
}

const mapStateToProps = state => {
    return({
        smurfs: state.smurfs,
        error: state.error,
        appLoading: state.appLoading
    })
}
export default connect(mapStateToProps)(SmurfDisplay)

//Task List:
//1. Import in all needed components and library methods.
//2. Connect all needed redux state props and action functions to the component before exporting.
//3. Fetch all smurfs when the component first mounts.
//4. Render loading text or graphic if the application is currently loading.
//5. Render a list of all Smurfs using the Smurf component if the application is not currently loading.