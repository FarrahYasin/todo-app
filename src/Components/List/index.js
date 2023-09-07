import React, { useContext } from "react";
import { Pagination, Select ,CloseButton} from "@mantine/core";
import { settingsContext } from "../Context/Settings/index";

// export default function List({ list, toggleComplete }) {
// const {itemsPerPage,currentPage,setCurrentPage} = useContext(settingsContext);

export default function List(props) {
  const settingsState = useContext(settingsContext);

  const startIndex =
    (settingsState.currentPage - 1) * settingsState.itemsPerPage;
  const endIndex = startIndex + settingsState.itemsPerPage;

  const itemsToDisplay = props.list.slice(startIndex, endIndex);

  const handlePageChange = (newPage) => {
    console.log('new Page // handleItemsPerPageChange',newPage)
    settingsState.setCurrentPage(newPage);
  };

  // const handleItemsPerPageChange = (value) => {
  //   console.log('value // handleItemsPerPageChange',value)
  //     settingsState.setItemsPerPage(value);
  // };
 
  return (
    <div>

      {/* <div className="select-list">
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
      </div> */}

      {itemsToDisplay.map((item) => (
        
        <div key={item.id}>
         <CloseButton onClick={() => props.toggleComplete(item.id)} />
          <p>{item.text}</p>
          <p>
            <small>Assigned to: {item.assignee}</small>
          </p>
          <p>
            <small>Difficulty: {item.difficulty}</small>
          </p>
           <div onClick={() => props.toggleCompletee(item.id)}>
            Complete: {item.complete.toString()}
             {/* <span className='copmleted'>Copmleted</span> : <span className='pendindg'>Pending</span> */}
         </div>  
          
        
          <hr />
        </div>
      ))
    }

      {props.list.length > settingsState.itemsPerPage && (
        <Pagination
          total={Math.ceil(props.list.length / settingsState.itemsPerPage)}
          value={settingsState.currentPage}
          onChange={handlePageChange}
          position="center"
          styles={(theme) => ({
            control: {
              "&[data-active]": {
                backgroundImage: theme.fn.gradient({
                  from: "#56d8e4",
                  to: "#9f01ea",
                }),
                border: 0,
              },
            },
          })}
        />
      )}
    </div>
  );
}

// import React, { useContext } from 'react';
// import { Pagination } from '@mantine/core';
// import { settingsContext } from "../../Context/Setting";

// export default function List({ list, toggleComplete }) {
//     const settings = useContext(settingsContext);

//   return (
//     <div>
//       {list.map((item) => (
//         <div key={item.id}>
//           <p>{item.text}</p>
//           <p>
//             <small>Assigned to: {item.assignee}</small>
//           </p>
//           <p>
//             <small>Difficulty: {item.difficulty}</small>
//           </p>
//           <div onClick={() => toggleComplete(item.id)}>
//             Complete: {item.complete.toString()}
//           </div>
//           <hr />
//         </div>
//       ))}

//       {list.length > 3 && (
//         <Pagination
//           total={list.length ? Math.ceil(list.length/settings.items) : 1}
//           position="center"
//           styles={(theme) => ({
//             control: {
//               '&[data-active]': {
//                 backgroundImage: theme.fn.gradient({ from: 'red', to: 'yellow' }),
//                 border: 0,
//               },
//             },
//           })}
//         />
//       )}
//     </div>
//   );
// }
