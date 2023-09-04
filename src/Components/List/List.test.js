import React from 'react';
import { render, screen } from '@testing-library/react';
import List from './index';
import { settingsContext } from '../Context/Settings/index';
import '@testing-library/jest-dom/extend-expect';

jest.mock('react', () => ({
  ...jest.requireActual('react'),
  useContext: jest.fn(),
}));

test('renders the List component correctly', () => {
  const contextValues = {
    itemsPerPage: 3,
    currentPage: 1,
    setCurrentPage: jest.fn(),
  };

  React.useContext.mockReturnValue(contextValues);

  const sampleList = [
    { id: '1', text: 'Task 1', assignee: 'User 1', difficulty: 3, complete: false },
    { id: '2', text: 'Task 2', assignee: 'User 2', difficulty: 2, complete: true },
  ];

  render(<List list={sampleList} />);

  expect(screen.getByText('Task 1')).toBeInTheDocument();
  expect(screen.getByText('Task 1')).toBeInTheDocument();
});
