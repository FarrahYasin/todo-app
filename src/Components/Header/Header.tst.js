/* eslint-disable testing-library/no-wait-for-multiple-assertions */
import React from 'react';
import '@testing-library/jest-dom';
import { render} from '@testing-library/react';
import Header from './index';


test('renders the header title correctly', () => {
  const { getByText} = render(<Header />);
  const headerTitleElement =getByText(/ToDo/i);
  expect(headerTitleElement).toBeTruthy();
});





  