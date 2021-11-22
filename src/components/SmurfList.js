import React,  {useEffect}  from 'react';
import axios from 'axios';
import Smurf from './Smurf';
import { connect } from 'react-redux';
import {fetchSmurfs} from "../actions";

 const SmurfList =( 
   smurf,
   isLoading,
   error,
   fetchSmurfs

  ) =>{

    useEffect(() => {
        fetchSmurfs()
      }, [])
    
      if (error) {
        return <h2>We got an error: {error}</h2>;
      }
    
      if (isLoading) {
        return <h2>Loading...</h2>;
      }
     

        return
    
            (<div className="listContainer">
                <Smurf smurf={fetchSmurfs}/>
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