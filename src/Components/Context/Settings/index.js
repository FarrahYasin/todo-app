import { saveListToLocalStorage, getListFromLocalStorage } from "../../localStorage/localStorage";
import { savePageToLocalStorage, getPageFromLocalStorage } from "../../localStorage/localstorage_page"; 
import React, { useEffect, useState } from "react";

export const settingsContext = React.createContext();

export default function SettingsProvider(props) {
  const [values, setValues] = useState({});
  // const [list, setList] = useState([]);
  const [incomplete, setIncomplete] = useState([]);
  // const [itemsPerPage,setItemsPerPage] = useState([3])
  const [sort, setSort] = useState('dificulty')
  const [showCompleted,setShowCompleted]=useState(true)
  const [list, setList] = useState(getListFromLocalStorage());
  const [itemsPerPage,setItemsPerPage] = useState(getPageFromLocalStorage()); 
 

  useEffect(() => {
    const storedShowCompleted = localStorage.getItem("showCompleted");
    if (storedShowCompleted === null) {
      setShowCompleted(storedShowCompleted === "true");
    }
   
  }, []);

  useEffect(() => { 
    localStorage.setItem("showCompleted", showCompleted.toString());
  }, [itemsPerPage,showCompleted,list]);

  useEffect(() => {
    const storedlist = localStorage.getItem("list");
    if (storedlist) {
    setList(JSON.parse(storedlist));
    }
  }, []);

  useEffect(() => {
    saveListToLocalStorage(list);
    localStorage.setItem("list", JSON.stringify(list));
  }, [list]);


  useEffect(() => {
    const sortedPage = localStorage.getItem("itemPerPage");
    if (sortedPage) {
    setItemsPerPage(JSON.parse(sortedPage));
    }
  }, []);

  useEffect(() => {
    savePageToLocalStorage(itemsPerPage);
    localStorage.setItem("itemPerPage", JSON.stringify(itemsPerPage));
  }, [itemsPerPage]);

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