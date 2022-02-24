import { render, screen } from './test.utils';
import App from './App';

test('renders learn react link', () => {
  render(<App />);
  const Element = screen.getByText(/Mobile Gallery/i);
  expect(Element).toBeInTheDocument();
});
