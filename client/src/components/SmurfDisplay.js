import React, { useEffect } from 'react';
import Smurf from './Smurf';
import {getSmurf} from '../actions/index';
import { connect } from 'react-redux';

const SmurfDisplay = (props) =>{

   console.log(props.smurfs);
        return(

        <div>
            <div>
                {props.smurfs.map((item) => (
                    <div key={item.id}>
                    
                        <p>Name:{item.name}</p>
                        <p>Nickname:{item.nickname}</p>
                        <p>Position:{item.position}</p>
                        <p>Description:{item.description}</p>
                    </div>
                        // <Smurf dispatch={props.dispatch} item={item}/>
                ))}
            </div>
        </div>
        )
    
}

const mapStateToProps = state => {
    return{
        smurfs:state.smurfs,
    }
}

export default connect(mapStateToProps, {getSmurf})(SmurfDisplay);
//Task List:
//1. Import in all needed components and library methods.
//2. Connect all needed redux state props and action functions to the component before exporting.
//3. Fetch all smurfs when the component first mounts.
//4. Render loading text or graphic if the application is currently loading.
//5. Render a list of all Smurfs using the Smurf component if the application is not currently loading.