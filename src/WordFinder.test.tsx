import { render, screen } from '@testing-library/react';
import WordFinder from './WordFinder';

test('renders learn react link', () => {
  render(<WordFinder />);
  const linkElement = screen.getByText(/Word Finder/i);
  expect(linkElement).toBeInTheDocument();
});
