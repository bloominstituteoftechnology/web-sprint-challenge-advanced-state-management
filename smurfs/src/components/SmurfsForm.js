import React, { useState } from 'react';
import { connect } from 'react-redux';
import { postSmurfs } from '../actions';
import { Form, FormGroup, Label, Input, Button, Card } from 'reactstrap';


const SmurfsForm = (props) => {
    const [smurf, setSmurf] = useState({
        name: '',
        age: '',
        height: '',
    })


const inputHandler = (event) => {
    setSmurf({ ...smurf, [event.target.name]: event.target.value })
}

const submitHandler = (event) => {
    event.preventDefault();
    props.postSmurfs(smurf)
}

return(
    <div>
        <Form id='smurfFrom' style={{ width: '40%',  marginLeft: '30%', padding: '2px #62cdfd', background: '#62cdfd', boxShadow: '0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19)' }}>

            <Card  style={{ background: '#62cdfd', color: 'whitesmoke', fontSize: '24px', fontWeight: 'bold'}}>
                <Label for='name'  >Name: </Label>
                    <Input style={{ width: '50%', marginLeft: '25%'}}
                        type='text'
                        name='name'
                        label='name'
                        placeholder='Enter Name'
                        value={props.name}
                        onChange={inputHandler}
                        />
                    

            <Label for='Age'>Age</Label>
                <Input  style={{ width: '50%', marginLeft: '25%'}}
                    type='text'
                    name='age'
                    label='age'
                    placeholder='Enter Age'
                    value={props.age}
                    onChange={inputHandler}
                    />  

                <Label for='weight'>Weight</Label>
                    <Input  style={{ width: '50%', marginLeft: '25%'}}
                        type='text'
                        name='weight'
                        label='weight'
                        placeholder='Enter Weight'
                        value={props.weight}
                        onChange={inputHandler}
                        />

             <Button onClick = {submitHandler} style={{ width: '30%', marginLeft: '35%', marginTop: '3%', marginBotton: '5%',  background: 'whitesmoke', color: '#62cdfd', boxShadow: '0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19)' }}> Submit Your Smurf</Button> 
            </Card>         
        </Form>
    </div>
  )
}

const mapStateToProps = (state) => {
    return {
        smurfs: state.smurfs,
        isPosting: state.isPosting,
        error: state.error
    }
}

export default connect(
    mapStateToProps, 
    {postSmurfs}
)(SmurfsForm);
