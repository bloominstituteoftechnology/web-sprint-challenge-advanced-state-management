import React from 'react';
import styled from 'styled-components';


const Container = styled.div`
    border: 1px solid #222;
    border-radius: 10px;
    background-color: #333;
    padding: 4%;
    width: 30%;
    box-shadow: 8px 8px 15px #000;
    color: #fff;
    margin: 4%;
`;


export const Smurf = (props) => {
    const { name, age, height } = props;
    return(
        <Container>
            <h2>{name}</h2>
            <p><b>Age:</b> {age}<br/><br/><b>Height:</b> {height}</p>
        </Container>
    )
} 