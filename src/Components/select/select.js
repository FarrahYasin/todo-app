// import React, { useContext } from "react";
// import { Select } from "@mantine/core";
// import { settingsContext } from "../Context/Settings/index";
// // import SettingsPage from "../SettingsPage/SettingsPage";

// export default function Selectt(props) {
//   const settingsState = useContext(settingsContext);

//   // const handleItemsPerPageChange = (value) => {
//   //   settingsState.setItemsPerPage(value);
//   // };

//   return (
//     <div className="select-list">
//       <label>
//         <span>Items per page:</span>
//       </label>
//       <Select
//         id="items-per-page"
//         value={settingsState.itemsPerPage}
//         onChange={(value) => props.handleItemsPerPageChange(value)}
//         data={[
//           { label: "1", value: "1" },
//           { label: "2", value: "2" },
//           { label: "3", value: "3" },
//           { label: "4", value: "4" },
//           { label: "5", value: "5" },
//           { label: "6", value: "6" },
//           { label: "10", value: "10" },
//         ]}
//       />
// {/* <SettingsPage itemsPerPage={settingsState.itemsPerPage} handleItemsPerPageChange={handleItemsPerPageChange}/> */}
//     </div>
//   );
// }