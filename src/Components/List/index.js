
import React, { useContext } from 'react';
import { Pagination } from '@mantine/core';
import { settingsContext } from "../Context/Settings/index";

export default function List({ list, toggleComplete }) {
//   const itemsPerPage = 3; 
//   const [currentPage, setCurrentPage] = useState(1);
const {itemsPerPage,currentPage,setCurrentPage} = useContext(settingsContext);

  const startIndex = (currentPage - 1) * itemsPerPage;
  const endIndex = startIndex + itemsPerPage;


  const itemsToDisplay = list.slice(startIndex, endIndex);

  const handlePageChange = (newPage) => {
    setCurrentPage(newPage);
  };

  return (
    <div>
      {itemsToDisplay.map((item) => (
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
      ))}

      {list.length > itemsPerPage && (
        <Pagination
          total={Math.ceil(list.length / itemsPerPage)} 
          value={currentPage}
          onChange={handlePageChange}
          position="center"
          styles={(theme) => ({
            control: {
              '&[data-active]': {
                backgroundImage: theme.fn.gradient({ from: '#56d8e4', to: '#9f01ea' }),
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
