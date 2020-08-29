import React from "react";
import { connect } from "react-redux";
import { getSmurf } from "../actions";
import { Card, Button } from "semantic-ui-react";


const Smurf = ({ getSmurf, smurf, nowLoading, error }) => {
  if (nowLoading) {
    return <h2>Getting Smurf...</h2>;
  }

  if (error) {
    return <h2>{error}</h2>;
  }

  return (
    <div>
      {smurf.map(item => {
        return (
          <Card centered color='blue'>
            <Card.Content>
              <Card.Header>{item.name}</Card.Header>
              <Card.Meta>Age:{item.age} Height:{item.height}</Card.Meta>
            </Card.Content>
          </Card>
        );
      })}

      <Button color='teal' onClick={getSmurf}>Get Smurf</Button>
    </div>
  );
};

const mapStateToProps = state => {
  return {
    smurf: state.smurf,
    nowLoading: state.nowLoading,
    error: state.error
  };
};

export default connect(mapStateToProps, { getSmurf})(Smurf);