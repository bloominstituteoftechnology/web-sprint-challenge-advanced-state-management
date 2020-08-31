// app.test.js
import React from 'react'
import {Provider} from 'react-redux'
import configureStore from 'redux-mock-store'
import {render} from '@testing-library/react'
import '@testing-library/jest-dom/extend-expect'
import NewSmurfs from '../Pages/Smurfs/newSmurfs'

describe('Add a New Smurf', () => {
  const initialState = {name: '', age: '', height: '', image: ''}
  const mockStore = configureStore()
  let store, wrapper

  it('First Text input Shows New Smurfs Name', () => {
    store = mockStore(initialState)
    const {getByText, getByPlaceholderText} = render(
      <Provider store={store}>
        <NewSmurfs />
      </Provider>
    )

    expect(getByPlaceholderText('New Smurfs Name')).not.toBeNull()
  })
})
