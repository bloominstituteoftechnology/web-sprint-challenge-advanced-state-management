import React, { useEffect } from "react";
import "./App.css";
import SmurfInfo from './smurf';
import SmurfList from './smurfList'

function App() {

  // const dispatch=useDispatch();

  // useEffect(() => {
  //   dispatch(getSmurfs);
  // }, [])

  
  
    // console.log(this.props.state)
    return (
      <div className="App">
        <h1>SMURFS! W/Redux</h1>
        <img className='smurfFam' src='https://mma.prnewswire.com/media/815510/DHX_Media_Ltd__WildBrain_Welcomes_The_Smurfs.jpg?p=publish' alt='Papa Smurf'/>
        <div>Welcome to your state management version of Smurfs!</div>
        <div>Start inside of your `src/index.js` file!</div>
        <div>Have fun!</div>
        <SmurfList/>
        <SmurfInfo/>
      </div>
    );
  }


export default App;
