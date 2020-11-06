import React, { Component, useState } from "react";
import { connect } from 'react-redux';
import { getSmurfs } from '../redux/actions'
import { Smurf } from './Smurf';
import Form from './Form';
import { mapStateToProps } from '../redux/mapStateToProps' 
import styled from 'styled-components';

import "./App.css";


const Container = styled.div`
  display: flex;
  flex-flow: column nowrap;
  justify-content: space-between;
`;

const SmurfContainer = styled.div`
  display: flex;
  flex-flow: row wrap;
  justify-content: space-around;
  width: 30%;
  margin: auto;
`;




const App = (props) => {

  const handleClick = (e) => {
    e.preventDefault();
    props.getSmurfs();
  }

  return (
    <div className="App">
      <Container>
        <h1>SMURFS! W/Redux</h1>
        {/*loading and error messages*/}
        <div>        
          {props.isLoading}  
          {props.error}
        </div>
        
        <Form/>

        {/*If there are smurfs, render*/}
        <SmurfContainer>
          {props.smurfs.length > 0 && props.smurfs.map(smurf => <Smurf key={smurf.id} {...smurf} />)}  
        </SmurfContainer>
        
      </Container>
    </div>    
  );
}



export default connect(mapStateToProps, { getSmurfs })(App);
