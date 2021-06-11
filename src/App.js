import React, { Component, useEffect } from 'react';
import { connect } from 'react-redux';

import AddForm from './components/AddForm';
import SmurfList from './components/SmurfList';
import Header from './components/Header';

import { fetchStart, fetchSuccess, fetchFail, fetchSmurfs } from './actions';

import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';

class App extends Component {
  
  componentDidMount() {
    this.props.fetchSmurfs();
  }

  render() {
    // const { fetchSmurfs } = props;

    // useEffect(() => {
    //   props.dispatch(fetchSmurfs());
    // }, []);
    
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
}

// const mapStateToProps = state => {
//   return {
//     smurfs: state.smurfs,
//     isLoading: state.isLoading,
//     error: state.error
//   }
// }

// const mapActionsToProps = {
//   fetchSmurfs
// }

export default connect(null, { fetchSmurfs })(App);

// export default App;

//Task List:
//1. Connect the fetchSmurfs actions to the App component.
//2. Call the fetchSmurfs action when the component first loads.