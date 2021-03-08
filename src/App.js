import React, { useEffect } from "react";
import { connect, useDispatch, useSelector } from "react-redux";
import AddForm from './components/AddForm';
import SmurfList from './components/SmurfList';
import Header from './components/Header';
import { fetchSmurfs, addSmurf } from './actions/index';

import 'bootstrap/dist/css/bootstrap.min.css';
import "./App.css";

function App() {

  const dispatch = useDispatch();
  const { smurf, loading } = useSelector((state) => state);

  useEffect(() => {
    fetchSmurfs(dispatch);
  }, [dispatch]);

  if (loading) {
    return <><h2>Loading...</h2></>;
  }

  return (
    <div className="App">
      <Header />

      <main>
        <SmurfList smurf={smurf}/>
        <AddForm/>
      </main>
    </div>
  );
}

const mapStateToProps = state => {
    return {
      smurfs: state.smurfs,
      loading: state.loading,
      error: state.error
    }
}

const mapDispatchToProps = dispatch => {
  return {
    addSmurf: newSmurf => dispatch(addSmurf(newSmurf))
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(App);

//Task List:
//1. Connect the fetchSmurfs actions to the App component.
//2. Call the fetchSmurfs action when the component first loads.