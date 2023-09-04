import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import Todo from './index';
import SettingsProvider from '../Context/Settings/index'; 

import '@testing-library/jest-dom/extend-expect';

test('renders the Todo component correctly', () => {
  render(
    <SettingsProvider>
      <Todo />
    </SettingsProvider>
  );

  expect(screen.getByText('To Do List: 0 items pending')).toBeInTheDocument();
  expect(screen.getByText('Add To Do Item')).toBeInTheDocument();

});

