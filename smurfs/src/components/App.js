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
  height: 100vh;
  width: 50%;
  margin: auto;
`;


const MessageContainer = styled.div`
  color: #fff;
  text-shadow: 4px 4px 10px #000;
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
        <MessageContainer>        
          {props.isLoading}  
          {props.error}
        </MessageContainer>
        
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
