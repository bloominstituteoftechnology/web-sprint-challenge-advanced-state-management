import React, { useEffect } from "react";
import "./App.css";
import SmurfForm from './smurfForm'
import Smurfs from '../components/Smurfs'
import { fetchSmurfs } from "../actions/fetchAction";
import { connect } from 'react-redux'

const App = props => {

  useEffect(() => {
    props.fetchSmurfs()
  }, [])

  return( 
     
      <div className="App">
        <h1>SMURFS!</h1>
        <SmurfForm />
        <Smurfs smurfs={props.smurfs}/>
      </div>
    );
  
}

const mapStateToProps = state => {
  return{
    smurfs: state.smurfs,
    isLoading: state.loading,
    error: state.erorr
  }
}

export default connect(mapStateToProps, { fetchSmurfs })(App);
