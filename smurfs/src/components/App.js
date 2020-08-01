import React from "react";
import "./App.css";
import SmurfsList from './SmurfsList';
import SmurfsForm from './SmurfsForm';
import { Card, CardTitle } from 'reactstrap';



function App() {
  
    return (
      <div className="App">
        <Card style={{ width: '50%', height: '30%', marginTop: '1%', marginLeft: '25%', fontSize: '80px' , fontWeight: 'bold' ,background: 'transparent', color: '#FFFF00', textShadow: '2px 2px 8px #FF0000' }}>
        <CardTitle style={{ }}>SMURFS!</CardTitle> 
        </Card>
        
        

        <SmurfsList />
      <SmurfsForm />
      </div> 
    ); 
  }


export default App;
