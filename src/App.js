import React, { Component } from "react";
import { connect } from "react-redux"
import AddForm from './components/AddForm';
import SmurfDisplay from './components/SmurfDisplay';
import Smurf from './components/Smurf'
import axios from 'axios';
import 'bootstrap/dist/css/bootstrap.min.css';
import "./App.css";
import { getSmurfData } from "./actions";

class App extends Component {
  componentDidMount() {
    axios.get('http://localhost:3333/smurfs').then(res=>{
      getSmurfData(res.data)
    })
  }
  
  render() {
    return (
      <div className="App">
        <nav className="navbar navbar-dark bg-primary">
          <a className="navbar-brand">Smurf Village Database</a>
        </nav>
        <main>
          <AddForm/>
          <SmurfDisplay/>
          <Smurf/>
        </main>
      </div>
    );
  }
}

const mapStateToProps = (state) =>{
  return{
    
      error:state.error,
      description:state.description,
      name:state.name,
      nickname:state.nickname,
      position:state.position
    }
  
   
  }

export default connect(mapStateToProps,{getSmurfData})(App)

//Task List:
//1. Add in SmurfDisplay and AddForm into your application.