import React from 'react';

const Smurf = (props)=> {
    const { name, position, nickname, description } = props.smurf;
    
    return(<div data-testid="smurf" className="card">
        <div className="card-body">
        <h3 className="card-title">{name}</h3>
            <hr/>
            <p className="card-text"><b>Position:</b> {position}</p>
            <p className="card-text"><b>Nickname:</b> {nickname}</p>
            <p className="card-text"><b>Description:</b> {description}</p>
        </div>
    </div>);
}

export default Smurf;