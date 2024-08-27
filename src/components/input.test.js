
import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import Input from './input';

test('should render Input component with label', () => {
  render(<Input label="Name" value="" onChange={() => {}} />);

  const labelElement = screen.getByText(/Name/i);
  expect(labelElement).toBeInTheDocument();
});

test('should allow text input', () => {
  const handleChange = jest.fn((e) => e.target.value);

  render(<Input label="Name" value="" onChange={handleChange} />);

  const inputElement = screen.getByRole('textbox');

  fireEvent.change(inputElement, { target: { value: 'John Doe' } });

  expect(handleChange).toHaveBeenCalledTimes(1);
  expect(inputElement.value).toBe('John Doe');
});
