import React from 'react'
import { Card, CardHeader, CardBody, CardText, Col } from 'reactstrap';

const Smurf = props => {

  return(
    <div>
      <Col>
      <Card xs='12' md='4' xl='3' className='smurf-card'>
        <CardHeader>{props.smurf.name}</CardHeader>
        <CardBody>
          <CardText>Age: {props.smurf.age}</CardText>
          <CardText>Height: {props.smurf.height}</CardText>
        </CardBody>
      </Card>
      </Col>
    </div>
  )
}

export default Smurf