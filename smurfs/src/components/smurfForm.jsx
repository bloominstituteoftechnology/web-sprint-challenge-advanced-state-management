import React, { useState } from 'react'
import { Button, Form, FormGroup, Label, Input } from 'reactstrap';
import { postSmurf } from '../actions/postAction'
import { useForm } from 'react-hook-form'
import { connect } from 'react-redux'

const SmurfForm = props => {

  const { errors } = useForm();

  const [formState, setFormState] = useState({
    name: '',
    age: '',
    height: ''
  })

  

  const [newSmurf, setNewSmurf] = useState({})


  const handleChanges = e => {

    const newFormData = {
      ...formState,
      [e.target.name]: e.target.name === 'age' ? Number(e.target.value) : e.target.value
    }

    setFormState(newFormData)
    setNewSmurf(newFormData)

  }


  const submitSmurf = e => {

     e.preventDefault()

     props.postSmurf(newSmurf)

     setFormState({
      name: '',
      age: '',
      height: ''
    })

  }

  return (

    <div>
      
      <Form className='form' onSubmit={submitSmurf}>

          <FormGroup>
            <Label for="name"></Label>
            <Input 
              type="text" 
              name="name" 
              id="name" 
              placeholder="Name" 
              value={formState.name}
              onChange={handleChanges}
            />
            {errors.name && (<p>Looks like there was an error: {errors.name.type}</p>)}
          </FormGroup>

          <FormGroup>
            <Label for="age"></Label>
            <Input 
              type="text" 
              name="age" 
              id="age" 
              placeholder="Age"
              value={formState.age}
              onChange={handleChanges}
            />
            {errors.age && (<p>Looks like there was an error: {errors.age.type}</p>)}
          </FormGroup>

          <FormGroup>
            <Label for="height"></Label>
            <Input 
              type="text" 
              name="height" 
              id="height" 
              placeholder="Height"
              value={formState.height}
              onChange={handleChanges}
            />
            {errors.height && (<p>Looks like there was an error: {errors.height.type}</p>)}
          </FormGroup>

          <Button type='submit'>Create!</Button>

      </Form>
      {/* <h4 className='json'>New Smurf: </h4>
      <pre>{JSON.stringify(newSmurf, null, 2)}</pre> */}
    </div>

  )
}

const mapStateToProps = state => {
  return{
    smurfs: state.smurfs
  }
}

export default connect(mapStateToProps, { postSmurf })(SmurfForm)