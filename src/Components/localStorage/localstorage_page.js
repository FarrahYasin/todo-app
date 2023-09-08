export const savePageToLocalStorage = (itemPerPage) => {
    localStorage.setItem("itemPerPage", JSON.stringify(itemPerPage));
  };
  
  export const getPageFromLocalStorage = () => {
    const sortedPage = localStorage.getItem("itemPerPage");
    return sortedPage ? JSON.parse(sortedPage) : [3];
  };