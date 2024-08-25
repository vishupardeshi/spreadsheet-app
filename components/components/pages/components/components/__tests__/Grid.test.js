import { render, screen, fireEvent } from '@testing-library/react';
import Grid from '../components/Grid';

test('renders grid and handles cell editing', () => {
  render(<Grid />);
  const cell = screen.getAllByRole('textbox')[0];
  fireEvent.change(cell, { target: { value: 'Test' } });
  expect(cell.value).toBe('Test');
});
