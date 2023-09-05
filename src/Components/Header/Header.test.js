import React from 'react';
import { render,screen } from '@testing-library/react';
import Header from './index';

test('renders the header title correctly', () => {
  const { getByText } = render(<Header />);
  const headerTitleElement = screen.getByText(/ToDo/i);
  expect(headerTitleElement).toBeTruthy();
});





  