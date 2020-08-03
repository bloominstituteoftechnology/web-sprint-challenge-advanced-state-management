import React from "react";
import ReactDOM from 'react-dom'
import { render, fireEvent, findByTestId } from "@testing-library/react";
import App from './App'
import SmurfsForm from "./SmurfsForm";
import '@testing-library/jest-dom/extend-expect'

it ('renders without crashing', () => {
    const div = document.createElement('div');
    ReactDOM.render(<App />, div);
    ReactDOM.unmountComponentAtNode(div);
})

test("form header renders", () => {
    const {getByText}= render(<SmurfsForm/>)
    const header = getByText(/Smurfs Form/i)
    expect(header).toBeInTheDocument
});

// test("form shows success message on submit with form details", () => {
//     const { getByTestId } = render(<SmurfsForm/>);
//    const successMessage = findByTestId(/successmessage/i)
//     expect(successMessage).toBeTruthy;

// });