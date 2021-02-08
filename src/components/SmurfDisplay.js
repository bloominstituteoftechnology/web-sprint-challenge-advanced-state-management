import React from 'react';
import { connect } from 'react-redux';
import { fetchSmurfs } from '../actions';
import Smurf from './Smurf';

export class SmurfDisplay extends React.Component {
    
    componentDidMount(){
        this.props.fetchSmurfs();
    }

    render() {
        const loading= this.props.state.loading;
        const smurfs = this.props.state.smurfs;
        return(
            loading ? <div>Loading</div> 
            : <div>{smurfs.map((item,index) => <Smurf key={index} smurf={item}/>)}
            </div>
        )
    }
}
const mapStateToProps = state => {
    return {
        state: state
    }
}

const mapDispatchToProps = dispatch =>{
    return{
        fetchSmurfs: () => dispatch(fetchSmurfs())
    }
}

export default connect(mapStateToProps,mapDispatchToProps)(SmurfDisplay);

//Task List:
//1. Import in all needed components and library methods.
//2. Connect all needed redux state props and action functions to the component before exporting.
//3. Fetch all smurfs when the component first mounts.
//4. Render loading text or graphic if the application is currently loading.
//5. Render a list of all Smurfs using the Smurf component if the application is not currently loading.