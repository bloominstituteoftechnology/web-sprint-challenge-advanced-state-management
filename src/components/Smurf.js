import React from 'react';

class Smurf extends React.Component {
  render() {
    const { smurf } = this.props;

    return (
      <div data-testid='smurf' className='card'>
        <div>
          <p>Name:{smurf.item.name}</p>
          <p>Nickname:{smurf.item.nickname}</p>
          <p>Position:{smurf.item.position}</p>
          <p>Description:{smurf.item.description}</p>
        </div>
      </div>
    );
  }
}

export default Smurf;

//Task List:
//1. Access smurf to be displayed through props.
//2. Display the name, position, nickname and description of the provided smurf as needed.
//3. Style as needed. (feel free to make use of the bootstrap card structure: https://getbootstrap.com/docs/4.0/components/card/)
//4. DO NOT DELETE THE data-testid FIELD! It is used for sprint grading.
