import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import AddForm from './components/AddForm';
import SmurfList from './components/SmurfList';
import Header from './components/Header';
import { fetchSmurfs } from './actions/index';

import 'bootstrap/dist/css/bootstrap.min.css';
import "./App.css";

function App() {

  const dispatch = useDispatch();
  const { smurf } = useSelector(state => state);

  useEffect(() => {
    fetchSmurfs(dispatch);
}, [dispatch]);


  return (
    <div className="App">
      <Header />

      <main>
        {smurf}
        <SmurfList />
        <AddForm/>
      </main>
    </div>
  )
}

export default App;

//Task List:
//1. Connect the fetchSmurfs actions to the App component.
//2. Call the fetchSmurfs action when the component first loads