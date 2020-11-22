import React from "react";
import { connect } from "react-redux";
import { css } from "@emotion/core";
import { SyncLoader } from "react-spinners";
import { loadSmurfs } from "../store/actions";
import { Button, Card } from "react-bootstrap";
import styled from 'styled-components'

const override = css`
  display: block;
  margin-top: 40px;
  color: blue;
`;

const SmurfDiv = styled.div`
width: 600px;
flex-direction: column;
display: inline-flex;
margin: 20px;
justify-content: center;
justify-content: space-between;
text-align: center;
`

const SmurfList = (props) => {
  const handleClick = (e) => {
    e.preventDefault();
    props.loadSmurfs();
  };

  return (
    <div>
      <Button onClick={handleClick}>Load Current Smurfs</Button>
      {props.isLoading ? (
        <SyncLoader css={override} color={"#2388D6"} />
      ) : props.error ? (
        <div style={{ color: "red" }}>{props.error}</div>
      ) : (
        <>
          <br />
          <br />
          {props.smurfs.map((smurf) => {
            return (
                <SmurfDiv>
                    <Card.Body>
                <Card.Header>{smurf.name}</Card.Header>
                <Card.Subtitle>{smurf.age} yrs. old</Card.Subtitle>
                <Card.Subtitle>{smurf.height} cm tall</Card.Subtitle>
              </Card.Body>
                </SmurfDiv>
              
            );
          })}
        </>
      )}
    </div>
  );
};

const mapStateToProps = ({ SR }) => {
  return {
    smurfs: SR.smurfs,
    isLoading: SR.isLoading,
    error: SR.error,
  };
};

export default connect(mapStateToProps, { loadSmurfs })(SmurfList);
