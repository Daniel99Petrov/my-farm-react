import styled from "styled-components";
import Navbar from "../bars/navBar/Navbar";

const StyledHeader = styled.header`
  background-color: #333;
  padding: 10px;
  color: white;
`;

export default function Header() {
  return (
    <StyledHeader>
      <Navbar />
    </StyledHeader>
  );
}
