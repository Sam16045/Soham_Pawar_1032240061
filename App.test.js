import { render, screen } from '@testing-library/react';
import App from './App';

test('renders student portfolio heading', () => {
  render(<App />);
  expect(
    screen.getByRole('heading', { name: /soham pawar/i, level: 1 })
  ).toBeInTheDocument();
  expect(screen.getByText(/^student portfolio$/i)).toBeInTheDocument();
});
