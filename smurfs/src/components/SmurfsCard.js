import React from 'react';
import { Card, CardBody, Button } from 'reactstrap';

const SmurfsCard = (props) => {
    return(

        <div>
            <Card style={{ width: '40%', margin: '5%', marginLeft: '30%', padding: '10px #62cdfd', boxShadow: '0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19)' }}> 
                <CardBody style={{ background: '#62cdfd', color: 'whitesmoke', textShadow: '2px 2px 8px black'}}>
                    <h2>
                        Name: {props.smurf.name}
                    </h2>
                    <h3>
                        Age: {props.smurf.age}
                    </h3>
                    <h3>
                        Height: {props.smurf.height}
                    </h3>
                   
                </CardBody>
            </Card>
        </div>
    )
}

export default SmurfsCard;