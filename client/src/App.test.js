import { render, screen } from '@testing-library/react';
import App from './App';

test('renders learn react link', () => {
  render(<App />);
  const Element = screen.getByText(/Empieza el Challenge/i);
  expect(Element).toBeInTheDocument();
});
