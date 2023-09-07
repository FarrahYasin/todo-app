import React, { useContext } from "react";
import "./SettingsPage.scss";
import { settingsContext } from "../Context/Settings";
import { Button, Select} from "@mantine/core";

export default function SettingsPage() {
  const { itemsPerPage, sort } = useContext(settingsContext);
  const { list, setList, incomplete, setIncomplete,hideCompleted,setHideCompleted } = useContext(settingsContext);
  const settingsState = useContext(settingsContext);
  
  function toggleComplete(id) {
    const items = list.map((item) => {
      if (item.id === id) {
        item.complete = "complete";
        setIncomplete(item.complete);
        setHideCompleted(false);
      }
      return item;
    });
    setList(items);
    console.log(items, 'this is from ')
  }
  const handleItemsPerPageChange = (value) => {
    console.log('value // handleItemsPerPageChange',value)
      settingsState.setItemsPerPage(value);
  };
 
  return (
    <div>
      <header>
        <h1> Manage Settings</h1>
      </header>

      <form>
        <h2>Update Settings</h2>
        <label class="switch">
          <input type="checkbox" onChange={toggleComplete}/>
          <span class="slider round"></span>
        </label>

        <p>Show Completed ToDos</p>
        <p>Items Per page</p>
        <input type="number" placeholder={itemsPerPage} />

        <div className="select-list">
        <label><span>Items per page:</span></label>
        <Select
          id="items-per-page"
          value={settingsState.itemsPerPage}
          onChange={(value) => handleItemsPerPageChange(value)}
          data={[
            { label: "1", value: "1" },
            { label: "2", value: "2" },
            { label: "3", value: "3" },
            { label: "4", value: "4" },
            { label: "5", value: "5" },
            { label: "6", value: "6" },
            { label: "10", value: "10" },
          ]}
        />
      </div>



        <p>Sort Keyword</p>
        <input type="text" placeholder={sort} />
        <br />

        <Button 
        Show New Settings  
        />
        
      </form>
    </div>
  );
}
