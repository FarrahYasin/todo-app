
import { MantineProvider } from "@mantine/core";
import React from "react";
// import Todo from "./Components/index"
import Header from "./Components/Header/index";
import Footer from "./Components/Footer/index";
// import SettingsProvider from "./Context/Settings/index";
import { Route, Routes } from "react-router-dom";
import SettingsProvider from "./Components/Context/Settings";
import Todo from "./Components/Todo";
import SettingsPage from "./Components/SettingsPage/SettingsPage";
// import Settings from "./Components/Settings";

export default class App extends React.Component {
  render() {
    return (
      <>
        <Header />
        <MantineProvider withGlobalStyles withNormalizeCSS> 
        <SettingsProvider>
          <Routes>
            <Route path="/" element={<Todo/>} />
            <Route path="/settings" element={<SettingsPage />} />
          </Routes>
        </SettingsProvider>
        <Footer />
         </MantineProvider>
      </>
    );
  }
}









// import React from "react";
// import { MantineProvider } from '@mantine/core';
// import Todo from "./Components/Todo";
// import SettingsProvider from "./Components/Context/Settings";
// import Header from "./Components/Header/index";
// import Footer from './Components/Footer/index'
// export default class App extends React.Component {
//   render() {
//     return (
      
//       <MantineProvider withGlobalStyles withNormalizeCSS>
//         <Header/>
//       <SettingsProvider>
//         <Todo />
//       </SettingsProvider>
//       <Footer/>
//       </MantineProvider> 
//     );
//   }
// }


