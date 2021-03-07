import { render, screen } from '@testing-library/react';
import Header from './Header';

test('header renders correctly', () => {
  render(<Header />);
  const headerTitle = screen.getByText(/smurf village database/i);
  expect(headerTitle).toBeInTheDocument();
});
