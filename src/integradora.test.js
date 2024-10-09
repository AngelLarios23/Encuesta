import { render, screen } from '@testing-library/react';
import integradora from './integradora';

test('renders learn react link', () => {
  render(<integradora/>);
  const linkElement = screen.getByText(/learn react/i);
  expect(linkElement).toBeInTheDocument();
});
