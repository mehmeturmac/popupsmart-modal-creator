import { render, screen } from '@testing-library/react';

import Footer from '../Footer';

test('Footer rendered correctly', () => {
  render(<Footer />);

  expect(screen.getByText(/Conversion & UX ready popups & modals/i).closest('h3')).toBeInTheDocument(); // Footer
});
