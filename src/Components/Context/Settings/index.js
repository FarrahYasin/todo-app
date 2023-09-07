import React, { useState } from "react";

export const settingsContext = React.createContext();

export default function SettingsProvider(props) {
  const [itemsPerPage,setItemsPerPage] = useState(3)

  const [values, setValues] = useState({});
  const [list, setList] = useState([]);
  const [incomplete, setIncomplete] = useState([]);
  const [sort, setSort] = useState('dificulty')
  const [showCompleted,setShowCompleted]=useState(true)//
  
  // itemsPerPage: 3,
  // hideCompleted: true,
  // sort: 'difficulty',

  // const defaultSettings = {
  //   displayItems: 5,
  //   hideCompleted: true,
  //   sort: 'difficulty',
  // };

  let initState = {
    itemsPerPage,
    setIncomplete,
    showCompleted,
    setItemsPerPage,
    setShowCompleted,
    sort,
    setSort,
    values,
    setValues,
    list,
    setList,
    incomplete,
    setIncomplete,
  
  };
 
  return (
    <settingsContext.Provider value={initState}>
      {props.children}
    </settingsContext.Provider>
  );
}