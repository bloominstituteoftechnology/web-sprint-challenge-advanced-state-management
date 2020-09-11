import React, { useEffect } from "react";
import {connect} from 'react-redux'

import Form from '../components/Form'
import {smurfFetch} from '../store/actions/index'
import Loader from './Loader'
import "./App.css";
function App({loading, smurfFetch, error}){

  useEffect(() => {
    smurfFetch();
  }, [])


    return (
      <div className="App">
        <h1>SMURFS! W/Redux</h1>
        <div>Welcome to your state management version of Smurfs!</div>
        <div>Start inside of your `src/index.js` file!</div>
        <div>Have fun!</div>
        {!loading ? <Loader /> : <div>Finding the Smurfs...</div>}
        {error !== '' ? <div>{error}</div> : null }
        <Form />
      </div>
    );
  }

  function mapStateToProps(state){
    return {
      loading: state.loading,
      error: state.error
    }
  }

export default connect(mapStateToProps, {smurfFetch})(App);
