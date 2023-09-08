import React, { useEffect, useState, useContext } from "react";
import useForm from "../../hooks/form";
import { v4 as uuid } from "uuid";
import { settingsContext } from "../Context/Settings/index.js";
import List from "../List/index.js";
import './todo.scss'
import { getListFromLocalStorage } from "../Context/Settings/localStorage"; // Import the utility function

// const {list,setList,incomplete,setIncomplete} = useContext(settingsContext);
// const [list, setList] = useState([]);
// const [incomplete, setIncomplete] = useState([]);

const Todo = () => {
  const settingsState = useContext(settingsContext);

  const [defaultValues] = useState({
    difficulty: 4,
  });
  const { handleChange, handleSubmit } = useForm(addItem, defaultValues);

  function addItem(item) {
    item.id = uuid();
    item.complete = 'pending';//false
    console.log("item::",item);
    settingsState.setList([...settingsState.list, item]);
  }

  function deleteItem(id) {
    const items = settingsState.list.filter((item) => item.id !== id);
    settingsState.setList(items);
  }

  function toggleComplete(id) {
    const items = settingsState.list.map((item) => {
      if (item.id === id) {
        item.complete = !item.complete;
      }
      return item;
    });
    settingsState.setList(items);
    deleteItem(id);
  }


   function toggleCompletee(id) {
    const items = settingsState.list.map((item) => {
      if (item.id === id) {
        item.complete = item.complete === 'pending' ? 'complete' : 'pending';
        settingsState.setIncomplete(item.complete)
      }
      console.log("incomplete",settingsState.list)
      return item;
    });
    settingsState.setList(items);

  }
  
  useEffect(() => {
    let incompleteCount = settingsState.list.filter((item) => item.complete && item.complete === 'pending').length;
    settingsState.setIncomplete(incompleteCount);
    document.title = `To Do List: ${settingsState.incomplete}`;
    // linter will want 'incomplete' added to dependency array unnecessarily.
    // disable code used to avoid linter warning
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [settingsState.list]);


  useEffect(() => {
    const storedList = getListFromLocalStorage();
    settingsState.setList(storedList);
  }, []);

  return (
    <>
      <header data-testid="todo-header">
        <h1 data-testid="todo-h1" className="todo-h1">To Do List: {settingsState.incomplete} items pending</h1>
      </header>

      <div  className="form-container">
        <div className="form-div">

      <form onSubmit={handleSubmit}>
        <h2 className="form-h2">Add To Do Item</h2>
        <label className="label-form">
          <span className="span-form">To Do Item</span>
          <input className="input-form"
            onChange={handleChange}
            name="text"
            type="text"
            placeholder="Item Details"
          />
        </label>

        <label className="label-form">
          <span className="span-form">Assigned To</span>
          <input className="input-form"
            onChange={handleChange}
            name="assignee"
            type="text"
            placeholder="Assignee Name"
            />
        </label>

        <label className="label-form">
          <span className="span-form">Difficulty</span>
         <div className="cc">

          <input className="input-form-c"
            onChange={handleChange}
            defaultValue={defaultValues.difficulty}
            type="range"
            min={1}
            max={5}
            name="difficulty"
            />
         </div>
        </label>

        <label className="label-form">
          <button className="button-form" type="submit">Add Item</button>
        </label>
      </form>
        </div>
      <div className="list-div">

      <List list = {settingsState.list} toggleComplete={toggleComplete} toggleCompletee={toggleCompletee}>

        {/* {list.map((item) => (
          <div key={item.id}>
          <p>{item.text}</p>
          <p>
          <small>Assigned to: {item.assignee}</small>
            </p>
            <p>
            <small>Difficulty: {item.difficulty}</small>
            </p>
            <div onClick={() => toggleComplete(item.id)}>
            Complete: {item.complete.toString()}
            </div>
            <hr />
            </div>
          ))} */}

        </List>
          </div>
          </div>
    </>
  );
};

export default Todo;