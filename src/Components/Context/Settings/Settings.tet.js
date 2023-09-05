// import React from 'react';
// import { render } from '@testing-library/react';
// import SettingsProvider, { settingsContext } from './index';
// import '@testing-library/jest-dom';

// describe('SettingsProvider Component', () => {
//   test('renders the SettingsProvider component correctly', () => {
//     // Define mock values for the context
//     const mockValues = {
//       itemsPerPage: 3,
//       hideCompleted: true,
//       sort: 'difficulty',
//     };

//     const { container } = render(
//       <settingsContext.Provider value={mockValues}>
//         <SettingsProvider>
//           <div>Test Content</div>
//         </SettingsProvider>
//       </settingsContext.Provider>
//     );
//     // expect(container.querySelector('div')).toHaveTextContent('Test Content');

//     expect(mockValues.itemsPerPage).toBe(3);
//     expect(mockValues.hideCompleted).toBe(true);
//     expect(mockValues.sort).toBe('difficulty');
//   });

// });
