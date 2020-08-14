import React, { Component } from "react";
import { connect } from 'react-redux'; 
import "./App.css";
import { fetchSmurfs } from '../actions/smurfActions'; 
import SmurfContainer from '../components/SmurfContainer'; 
import SmurfForm from '../components/SmurfForm'; 

// app will be used to set up state and get the initial smurf data, and then render components with that data
// step 4. we will need to getSmurfs and recieve our data -> make an actions folder
// step 6. connect app to store
// step 7. see SmurfContainer.js 
// step 10. Add a form to add a new smurf! See SmurfForm.js


class App extends Component {


  componentDidMount() {
    this.props.fetchSmurfs(); 
  }

  render() {
    return (
      <div className="App">
        <h2>Smurfbook</h2>
        <SmurfContainer /> 
        <SmurfForm /> 
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return state;
}

export default connect(mapStateToProps, { fetchSmurfs })(App);
