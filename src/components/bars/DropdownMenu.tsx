// import React, { useState } from "react";
// import styled from "styled-components";

// const DropdownWrapper = styled.div`
//   position: relative;
//   display: inline-block;
// `;

// const DropdownButton = styled.button`
//   background-color: #3498db;
//   color: #ffffff;
//   padding: 10px;
//   border: none;
//   cursor: pointer;
// `;

// const DropdownContent = styled.div`
//   display: ${({ isOpen }) => (isOpen ? "block" : "none")};
//   position: absolute;
//   background-color: #f9f9f9;
//   min-width: 160px;
//   box-shadow: 0 8px 16px rgba(0, 0, 0, 0.2);
//   z-index: 1;
// `;

// const DropdownItem = styled.div`
//   padding: 10px;
//   cursor: pointer;

//   &:hover {
//     background-color: #ddd;
//   }
// `;

// const DropdownMenu = ({ buttonText, items }) => {
//   const [isOpen, setIsOpen] = useState(false);

//   const toggleMenu = () => {
//     setIsOpen((prevIsOpen) => !prevIsOpen);
//   };

//   const handleItemClick = (item) => {
//     console.log(`Clicked on ${item}`);
//     // You can add more logic here based on the selected item
//     // For example, navigate to a specific page or perform an action
//   };

//   return (
//     <DropdownWrapper>
//       <DropdownButton onClick={toggleMenu}>{buttonText}</DropdownButton>
//       <DropdownContent isOpen={isOpen}>
//         {items.map((item, index) => (
//           <DropdownItem key={index} onClick={() => handleItemClick(item)}>
//             {item}
//           </DropdownItem>
//         ))}
//       </DropdownContent>
//     </DropdownWrapper>
//   );
// };

// export default DropdownMenu;