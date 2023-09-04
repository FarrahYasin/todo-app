import React from "react";
import { MantineProvider } from '@mantine/core';
import Todo from "./Components/Todo";
import SettingsProvider from "./Components/Context/Settings";
import Header from "./Components/Header/index";
import Footer from './Components/Footer/index'
export default class App extends React.Component {
  render() {
    return (
      
      <MantineProvider withGlobalStyles withNormalizeCSS>
        <Header/>
      <SettingsProvider>
        <Todo />
      </SettingsProvider>
      <Footer/>
      </MantineProvider> 
    );
  }
}