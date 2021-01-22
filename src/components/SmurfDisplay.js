import React from 'react';
import { connect } from 'react-redux';
import { fetchSmurfs } from '../actions/index';

export class SmurfDisplay extends React.Component {

    componentDidMount() {
        this.props.fetchSmurfs();
    }

    // componentDidUpdate() {
    //     this.props.fetchSmurfs();
    // }

    render() {
        
        return(
            <div>
                {this.props.smurfs.map(smurf => {
                    return (
                        <div>
                            <h4>{smurf.name}</h4>
                            <p>Nickname: {smurf.nickname}</p>
                            <p>Position: {smurf.position}</p>
                            <p>Description: {smurf.description}</p>
                        </div>
                    )
                })}
            </div>)
    }
}

const mapStateToProps = state => {
    return {
      smurfs: state.smurfs
    };
  };
  
export default connect(mapStateToProps, { fetchSmurfs })(SmurfDisplay);


//Task List:
//1. Import in all needed components and library methods.
//2. Connect all needed redux state props and action functions to the component before exporting.
//3. Fetch all smurfs when the component first mounts.
//4. Render loading text or graphic if the application is currently loading.
//5. Render a list of all Smurfs using the Smurf component if the application is not currently loading.