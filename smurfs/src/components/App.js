import React, { Component } from "react";
import {connect} from 'react-redux'
import {getSmurfs} from '../store/actions/smurfActions'
import SmurfContainer from './SmurfContainer'
import NewSmurfForm from './NewSmurfForm'
import "./App.css";
class App extends Component {
  constructor(props) {
    super(props)
  }

  componentDidMount(){
    this.props.getSmurfs()
  }
  render() {
    return (
      <div className="App">
        <img src='https://cdn.freebiesupply.com/logos/large/2x/smurfs-1-logo-png-transparent.png'></img>
        <NewSmurfForm />
        <div className='app-container'>
        <SmurfContainer />
        </div>
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return state
}

export default connect(mapStateToProps, {getSmurfs})(App);