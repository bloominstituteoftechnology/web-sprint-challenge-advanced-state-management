import React from 'react'
import './App.css'
import {Switch, Route} from 'react-router-dom'
import Home from '../Pages/Home/Home'
import NewSmurfs from '../Pages/Smurfs/newSmurfs'
import SmurfDetails from '../Pages/Smurfs/SmurfDetails'
import Navigation from './Header/Navigation'
import AddModal from '../Pages/Smurfs/AddSmurfs'

function App() {
  return (
    <>
      <Navigation />
      <Switch>
        <Route path='/smurfs' exact component={AddModal} />
        <Route path='/smurfs/:id' exact component={SmurfDetails} />
        <Route path='/new' exact component={NewSmurfs} />
        <Route path='/' exact component={Home} />
      </Switch>
    </>
  )
}

export default App
