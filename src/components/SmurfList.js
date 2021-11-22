import React,  {useEffect}  from 'react';
import axios from 'axios';
import Smurf from './Smurf';
import { connect } from 'react-redux';
import {fetchSmurfs} from "../actions";

 const SmurfList =( 
   
   isLoading,
   fetchSmurfs

  ) =>{

    useEffect(() => {
        fetchSmurfs()
      }, [])
    
         
      if (isLoading) {
        return <h2>Loading...</h2>;
      }
     

        return
    
            (<div className="listContainer">
                <Smurf/>
            </div>);
    }
    const mapStateToProps = state => {
        return {
            smurf: state.smurf,
            isLoading: state.isLoading,
            error: state.isLoading,
            fetchSmurfs,
        };
      };
      
      export default connect(
        mapStateToProps, 
        { fetchSmurfs }
        
      )(Smurf);

//Task List:
//1. Connect the smurfs and loading state values to the SmurfList component.
//2. Replace the single Smurf component instance with a map return a Smurf component for each entry in the smurfs list.
//3. Replace the static isLoading variable with the state loading variable.