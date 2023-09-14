import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import SettingPage from './Components/SettingsPage/Settings_Page';
import Todo from './Components/Todo';
import AppHeader from './Components/Header/Header';
import Footer from './Components/Footer/Footer';
import Settings from './Components/Context/Settings/Settings';
import ListsSaver from './Components/Context/dataList/dataList';
import LoginProvider from './Components/Context/Context_Login/Context_Login';

export default function App() {
  return (
    <BrowserRouter>
      <LoginProvider>
        <Settings>
          <ListsSaver>
            <AppHeader />
            <Routes>
              <Route path='/' element={<Todo />} />
              <Route path='/settings' element={<SettingPage />} />
            </Routes>
            <Footer />
          </ListsSaver>
        </Settings>
      </LoginProvider>
    </BrowserRouter>
  );
}
