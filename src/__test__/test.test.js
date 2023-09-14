import React from 'react';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import { MemoryRouter } from 'react-router-dom'; 
import Header from '../Components/Header/Header';
import  Footer  from '../Components/Footer/Footer';

describe('Login/Auth components', () => {
  it('should render the Auth components', () => {
    render(
      <MemoryRouter>
        <Header />
      </MemoryRouter>
    );

    const headerTitle = screen.getByText('ToDo');
    expect(headerTitle).toBeInTheDocument();
  });
  it('should render the login componentss', () => {
    render(<Footer />);
    
    const copyrightText = screen.getByText('© 2018');
    expect(copyrightText).toBeInTheDocument();
  });
  it('should render Settings link', () => {
    render(
      <MemoryRouter>
        <Header />
      </MemoryRouter>
    );

    const homeLink = screen.getByText('Home');
    expect(homeLink).toBeInTheDocument();
    expect(homeLink).toHaveAttribute('href', '/');
  });

  it('HomeLink', () => {
    render(
      <MemoryRouter>
        <Header />
      </MemoryRouter>
    );

    const settingsLink = screen.getByText('Settings');
    expect(settingsLink).toBeInTheDocument();
    expect(settingsLink).toHaveAttribute('href', '/settings');
  });
});
