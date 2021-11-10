import React from 'react';

//**************DO NOT EDIT ANY CODE BEYOND THIS POINT**************//

const Guest = (props)=> {
    const { guest } = props;
    
    return(<div data-testid="smurf" className="card">
        <div className="card-body">
        <h3 className="card-title">{guest.name}</h3>
            <hr/>
            <p className="card-text"><b>Position:</b> {guest.position}</p>
            <p className="card-text"><b>Nickname:</b> {guest.nickname}</p>
            <p className="card-text"><b>Description:</b> {guest.description}</p>
        </div>
    </div>);
}

export default Guest;