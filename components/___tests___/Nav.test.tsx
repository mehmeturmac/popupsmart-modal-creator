import { render, screen } from '@testing-library/react';
import { act } from 'react-dom/test-utils';

import Nav from '../Nav';

test('Navbar rendered correctly', () => {
  render(<Nav />);

  expect(screen.getByText(/modal.cards/i)).toHaveTextContent('modal.cards'); // Logo
  expect(screen.getByText(/Try for free/i).closest('a')).toHaveAttribute('href', '#container'); // Try Button
});
