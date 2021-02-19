import React from 'react';

const Smurf = (props)=> {
    const { smurf } = props;
    
    return(<div data-testid="smurf" className="card">
        <div className="card-body">
        <h3 className="card-title">{smurf.name}</h3>
            <hr/>
            <p className="card-text"><b>Position:</b> {smurf.position}</p>
            <p className="card-text"><b>Nickname:</b> {smurf.nickname}</p>
            <p className="card-text"><b>Description:</b> {smurf.description}</p>
        </div>
    </div>);
}

export default Smurf;