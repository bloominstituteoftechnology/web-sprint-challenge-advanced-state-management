import React from "react";
import ReactDOM from 'react-dom';
import { render, fireEvent } from "@testing-library/react";
import SmurfForm from './components/SmurfForm';

test('test form inputs', async () => {
    const { getByTestId } = render(<SmurfForm />);

    const Name = getByTestId('name');
    fireEvent.change(Name, {
        target: { value: 'Sleepy' }
    });
    expect(getByTestId(Name)).toHaveValue('Sleepy');

    const Age = getByTestId('age');
    fireEvent.change(Age, {
        target: { value: '500' }
    });
    expect(getByTestId(Age)).toHaveValue('500');

    const Height = getByTestId('height');
    fireEvent.change(Height, {
        target: { value: '5CM' }
    });
    expect(getByTestId(Height)).toHaveValue('5CM');

    const button = getByTestId('submit');
    fireEvent.click(button)
})