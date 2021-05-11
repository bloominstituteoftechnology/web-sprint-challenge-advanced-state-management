import React, { Component } from "react";
import {getSmurfs} from './actions/index'
import AddForm from './components/AddForm';
import SmurfList from './components/SmurfList';
import Header from './components/Header';
import {connect} from 'react-redux'
import {useEffect} from 'react'

import 'bootstrap/dist/css/bootstrap.min.css';
import "./App.css";

const App =(props)=> {
useEffect(()=> {
  props.api()
}, [])
    return (
      <div className="App">
        <Header />

        <main>
          <SmurfList/>
          <AddForm/>
        </main>
      </div>
    );
  }


function mapStateToProps(state){
  return {
    state,
  }
}

function mapDispatchToProps(){
  return {
  api: getSmurfs
  }
}

export default connect(mapDispatchToProps, mapStateToProps)(App)
//Task List:
//1. Connect the fetchSmurfs actions to the App component.
//2. Call the fetchSmurfs action when the component first loads.