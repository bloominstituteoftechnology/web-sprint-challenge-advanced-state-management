import React from 'react';
import MutationObserver from 'mutationobserver-shim';
import { render as rtlRender, screen, fireEvent, within } from '@testing-library/react';

import App from './App';

import { createStore, applyMiddleware } from 'redux';
import { Provider } from 'react-redux';
import thunk from 'redux-thunk';


import reducer from './reducers';
import { initialState } from './reducers';

const reduxRender = (ui, initState) => {
    const store = createStore(reducer, initState, applyMiddleware(thunk));

    function Wrapper({ children }) {
        return <Provider store={store}>{children}</Provider>
    }

    return rtlRender(ui, {wrapper: Wrapper});
}

const runForm = async (name, position, nickname, description='') => {
    reduxRender(<App/>, initialState);
    await screen.findAllByTestId("smurf");

    const nameInput = screen.getByLabelText(/^name:/i);
    const positionInput = screen.getByLabelText(/position:/i);
    const nicknameInput = screen.getByLabelText(/nickname:/i);
    const descriptionInput = screen.getByLabelText(/description:/i);
    
    fireEvent.change(nameInput, {target:{name:'name', value:name}});
    fireEvent.change(positionInput, {target:{name:'position', value:position}});
    fireEvent.change(nicknameInput, {target:{name:'nickname', value:nickname}});
    fireEvent.change(descriptionInput, {target:{name:'description', value:description}});
    
    const button = screen.getByRole("button", {name:/submit smurf/i});
    fireEvent.click(button);
}

describe("Basic Application Functioning:", ()=>{
    test('App renders without errors', async ()=> {
        reduxRender(<App/>, initialState);
    });
    
    test('App loads initial data and displays them correctly', async ()=> {
        reduxRender(<App/>, initialState);
        const smurfs = await screen.findAllByTestId("smurf");
        expect(smurfs).toHaveLength(2);
    });
});

describe("Validation Testing:", ()=>{
    test('App returns a validation error when name not included', async ()=> { 
        await runForm('', 'worker', 's3', 'description');
        const error = await screen.findByTestId('errorAlert');
        
        const nicknameTest = within(error).queryByText(/name/i);
        const errorTest = within(error).queryByText(/error/i);
    
        expect(nicknameTest).not.toBeNull();
        expect(errorTest).not.toBeNull();
    });
});

describe("Form Submission:", () => {
    test('App returns a smurf when all values are submitted', async ()=> {
        await runForm('smurf 5', 'worker', 's3', 'description');
        const smurf = screen.findByText(/smurf 3/i);
        expect(smurf).not.toBeNull();
    });
});