import React from 'react';
import { Card } from 'react-bootstrap';

class Smurf extends React.Component {

    render() {
        const { smurf } = this.props;
        console.log(smurf);

        return(<div data-testid="smurf" className="card">
            <div className="card-body">
                <Card border="seconary" className="text-center">
                    <Card.Header as="h1" variant="primary">{smurf.name}</Card.Header>
                    <Card.Body>
                    <Card.Title>{smurf.position}</Card.Title>
                    <Card.Text>"{smurf.nickname}"</Card.Text>
                    </Card.Body>
                    <Card.Footer>{smurf.description}</Card.Footer>
                </Card>
            </div>
        </div>);
    }
}

export default Smurf;

//Task List:
//1. Access smurf to be displayed through props.
//2. Display the name, position, nickname and description of the provided smurf as needed.
//3. Style as needed. (feel free to make use of the bootstrap card structure: https://getbootstrap.com/docs/4.0/components/card/)
//4. DO NOT DELETE THE data-testid FIELD! It is used for sprint grading.