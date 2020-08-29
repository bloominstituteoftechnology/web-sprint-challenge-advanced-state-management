import React, { Component } from "react";
import { connect } from "react-redux";

import "./App.css";
import { getSmurfs } from "../actions/actions";
import SmurfList from "./smurfsList";
import SmurfForm from "./smurfForm";

class App extends Component {
  constructor(props) {
    super(props)
  };
  componentDidMount(){
    this.props.getSmurfs()
  };
  render() {
    return (
      <div className="App">
        <h1>SMURFS!</h1>
        <SmurfForm />
        <SmurfList />
      </div>
    );
  };
};

const mapStateToProps = state => {
  return {}
};
export default connect(
  mapStateToProps,
  { getSmurfs }
)(App);