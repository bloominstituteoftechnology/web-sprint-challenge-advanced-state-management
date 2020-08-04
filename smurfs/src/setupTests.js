// jest-dom adds custom jest matchers for asserting on DOM nodes.
// allows you to do things like:
// expect(element).toHaveTextContent(/react/i)
// learn more: https://github.com/testing-library/jest-dom
import '@testing-library/jest-dom/extend-expect';
import { render, fireEvent } from '@testing-library/react';
import SmurfForm from './components/SmurfForm';

test('test form inputs', async () => {
    const { getByTestId } = render(<SmurfForm />);

    const Name = getByTestId('name');
    fireEvent.change(Name, {
        target: { value: 'Sleepy' }
    });
    expect(getByTestId(Name)).toHaveValue('Sleepy');
})