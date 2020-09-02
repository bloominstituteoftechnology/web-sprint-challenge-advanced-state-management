import React, { useEffect } from "react";
import {useDispatch, useSelector} from 'react-redux';
import {fetchSmurfData} from './actions/smurfActions';

import "./App.css";

import  AddSmurf from './components/addSmurf';
import Smurfs from './components/smurfs';



const App = () => {
  const dispatch = useDispatch();
  const errors = useSelector(state => state.errors);

  useEffect(() => {
    dispatch(fetchSmurfData());
  },[])

    return (
     <div>
       <h1>Welcome to SmurfVille</h1>
       <h2>Please Add More Smurfs</h2>
       <AddSmurf/>
       <Smurfs/>
       {errors ? <p>{errors}</p> : <></>}
     </div>
    )
  }


export default App;
