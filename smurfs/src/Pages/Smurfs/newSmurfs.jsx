import React, {useState, useEffect} from 'react'
import './smurfs.css'

import {uploadImage} from '../../redux/actions/imageActions'
import {addNewSmurf} from '../../redux/actions/smurfsAction'
import {useDispatch, useSelector} from 'react-redux'
import {useHistory} from 'react-router-dom'
import {Button, Form, FormGroup, Input, Progress} from 'reactstrap'

const NewSmurfs = ({modal, toggle}) => {
  const initialState = {
    name: '',
    age: '',
    height: '',
    image: '',
  }
  const [formValue, setFormValue] = React.useState(initialState)
  const [file, setFile] = React.useState('')
  const [imageUplaoded, setImageUplaoded] = React.useState('')
  const [HandleFormData, handleFormData] = useState({})
  const image = useSelector((state) => state.image)
  const dispatch = useDispatch()
  const history = useHistory()
  const handleInputChanges = (e) => {
    const inputValue = {
      ...formValue,
      [e.target.name]: e.target.value,
    }
    setFormValue(inputValue)
  }

  const handleImageUpload = (e) => {
    setFile(URL.createObjectURL(e.target.files[0]))
    const file = e.target.files
    handleFormData(file)
    e.target.files = null
  }

  const saveImage = () => {
    const data = new FormData()
    data.append('file', HandleFormData[0])
    data.append('upload_preset', 'smurfs')
    dispatch(uploadImage(data))
    console.log('images posted')

    setImageUplaoded(image.imageUrl)
  }

  const addNewPost = () => {
    console.log('image here', image.imageUrl)
    const data = {
      id: Date.now(),
      name: formValue.name,
      age: formValue.age,
      height: formValue.height,
      image: image.imageUrl,
    }

    dispatch(addNewSmurf(data))
    setImageUplaoded('')
  }

  const handleFormSubmit = (e) => {
    e.preventDefault()

    addNewPost()
    setFormValue(initialState)

    history.push('/')
  }

  return (
    <div className='container new'>
      <div className='row'>
        <div className='col'>
          <Form onSubmit={handleFormSubmit}>
            <FormGroup>
              <Input
                type='text'
                name='name'
                id='name'
                placeholder='New Smurfs Name'
                onChange={handleInputChanges}
                value={formValue.name}
              />
            </FormGroup>
            <FormGroup>
              <Input
                type='text'
                name='age'
                id='age'
                placeholder="Smurf's age"
                onChange={handleInputChanges}
                value={formValue.age}
              />
            </FormGroup>
            <FormGroup>
              <Input
                type='text'
                name='height'
                id='height'
                placeholder="Smurf's height"
                onChange={handleInputChanges}
                value={formValue.height}
              />
            </FormGroup>
            <FormGroup>
              <Input
                data-cloudinary-field='image_id'
                data-form-data="{ 'transformation': {'crop':'limit','tags':'samples','width':3000,'height':2000}}"
                onChange={handleImageUpload}
                type='file'
                name='file'
                id='exampleFile'
              />
            </FormGroup>
            <FormGroup>
              {image.loading < 0 ? null : (
                <Progress
                  value={image.uploading}
                >{`${image.uploading} %`}</Progress>
              )}
            </FormGroup>
            <Button color='primary' onClick={saveImage}>
              Save
            </Button>{' '}
            <Button
              color='secondary'
              disabled={image.imageUrl ? false : true}
              onClick={handleFormSubmit}
            >
              Add
            </Button>
          </Form>
        </div>
        <div className='col'>
          {image.imageUrl ? <img src={image.imageUrl} alt='' /> : ''}
        </div>
      </div>
    </div>
  )
}

export default NewSmurfs
