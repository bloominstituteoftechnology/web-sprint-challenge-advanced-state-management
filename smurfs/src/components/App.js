import React from "react";
import "./App.css";
import SmurfsList from './SmurfsList'
import SmurfsForm from './SmurfsForm'
import { BrowserRouter as Router, Route, Link,} from "react-router-dom";
import { CardImg } from 'reactstrap'

function App () {
  
    return (
      <Router>
        
      <div className="App" >
        <h1>SMURFS!</h1>
        <CardImg style = {{width:'90%', margin:'0 auto', height:'500px'}} src={require ('../img/images.jpeg')}/>
        <div>Welcome to your state management version of Smurfs!</div>
        <br></br>
        <Link to= '/Profile'>
            <button style={{margin:'10px'}}>Smurf Profiles</button>
        </Link>
        <Link to= '/SmurfsForm'>
            <button style={{margin:'10px'}}>Add a Smurf</button>
        </Link>
        <Link to= '/'>
            <button style={{margin:'10px'}}>Home</button>
        </Link>
        <Route exact path = '/Profile'>
        <SmurfsList/>
        </Route>
        <br></br>
        <br></br>
        <Route exact path ='/SmurfsForm'>
        <SmurfsForm/>
        </Route>
      </div>
      </Router>
    );
  }

export default App;


