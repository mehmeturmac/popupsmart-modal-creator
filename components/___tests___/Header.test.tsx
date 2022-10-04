import { render, screen } from '@testing-library/react';

import Header from '../Header';

test('Header rendered correctly', () => {
  render(<Header />);

  expect(screen.getByText(/Simple modal card creator/i).closest('h1')).toBeInTheDocument(); // Header
  expect(screen.getByText(/Try it out now/i).closest('a')).toHaveAttribute('href', '#container'); // Try Button
});
