import React, { Component } from "react";
import "./App.css";
import { Switch, Route, } from 'react-router-dom'
import Home from '../Pages/Home/Home'
import Smurfs from '../Pages/Smurfs/Smurfs'
import Navigation from "./Header/Navigation";

function App() {
  return (
    <>
      <Navigation />
      <Switch>
        <Route path="/" exact component={Home} />
        <Route path="/smurfs" exact component={Smurfs} />
      </Switch>
    </>
  )
}

export default App


