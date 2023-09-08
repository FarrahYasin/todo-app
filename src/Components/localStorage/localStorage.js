export const saveListToLocalStorage = (list) => {
    localStorage.setItem("list", JSON.stringify(list));
  };
  
  export const getListFromLocalStorage = () => {
    const storedList = localStorage.getItem("list");
    return storedList ? JSON.parse(storedList) : [];
  };