import { saveListToLocalStorage, getListFromLocalStorage } from "./localStorage"; // Import the utility functions
import React, { useEffect, useState } from "react";

export const settingsContext = React.createContext();

export default function SettingsProvider(props) {
  const [values, setValues] = useState({});
  // const [list, setList] = useState([]);
  const [incomplete, setIncomplete] = useState([]);
  const [itemsPerPage,setItemsPerPage] = useState('')
  const [sort, setSort] = useState('dificulty')
  const [showCompleted,setShowCompleted]=useState(true)//
  const [list, setList] = useState(getListFromLocalStorage()); // Initialize list from local storage
  // itemsPerPage: 3,
  // hideCompleted: true,
  // sort: 'difficulty',

  // const defaultSettings = {
  //   displayItems: 5,
  //   hideCompleted: true,
  //   sort: 'difficulty',
  // };

  useEffect(() => {
    const storedItemsPerPage = localStorage.getItem("itemsPerPage");
    if (storedItemsPerPage) {
      setItemsPerPage(parseInt(storedItemsPerPage));
    }
    
    const storedShowCompleted = localStorage.getItem("showCompleted");
    if (storedShowCompleted === null) {
      setShowCompleted(storedShowCompleted === "true");
    }
    // const storedList = localStorage.getItem("list");
    // if (storedList) {
    //   setList(JSON.parse(storedList));
    // }
  }, []);

  useEffect(() => { //this to save itemsPerPage once it change
    localStorage.setItem("itemsPerPage", itemsPerPage.toString());
    localStorage.setItem("showCompleted", showCompleted.toString());
    // localStorage.setItem("list", JSON.stringify(list));
  }, [itemsPerPage,showCompleted,list]);

  useEffect(() => {
    const storedlist = localStorage.getItem("list");
    if (storedlist) {
    // setList(storedlist);
    setList(JSON.parse(storedlist));
    }
  }, []);

  useEffect(() => {
    // localStorage.setItem("list", list);
    saveListToLocalStorage(list);
    localStorage.setItem("list", JSON.stringify(list));
  }, [list]);

  let initState = {
    itemsPerPage,
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