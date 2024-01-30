import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import styled from "styled-components";
import LogoutModal from "./modals/ConfirmModal";
import { Container } from "../ui_elements/CommonStyledElements";

const StyledNav = styled.nav`
  ul {
    list-style: none;
    padding: 0;
    display: flex;
    overflow: hidden;

    li {
      margin-right: 10px;

      a {
        text-decoration: none;
        color: #2ecc71; /* Green color related to agro/farms */
        font-weight: bold;

        &:hover {
          text-decoration: underline;
        }
      }
    }
  }
`;

const AuthLinks = styled.div`
  margin-left: auto;
  overflow: hidden;

  a {
    color: #3498db; /* Blue color related to authentication links */
    text-decoration: none;
    margin-right: 10px;
    font-weight: bold;

    &:hover {
      text-decoration: underline;
    }
  }
`;

export default function Navbar() {
  const modalMessage = `Are you sure you want to logout?`;
  const navigate = useNavigate();
  const [isLogoutModalOpen, setLogoutModalOpen] = useState(false);

  const handleLogout = () => {
    // Open the logout confirmation modal
    setLogoutModalOpen(true);
  };

  const handleConfirmLogout = () => {
    // Clear the authentication token from local storage
    localStorage.setItem("token", "");
    // Redirect to the home page or login page
    navigate("/user/signin");
    // Close the logout confirmation modal
    setLogoutModalOpen(false);
  };

  const handleCancelLogout = () => {
    // Close the logout confirmation modal
    setLogoutModalOpen(false);
  };
  return (
    <StyledNav>
      <Container>
      <ul>
        <li>
          <Link to="/">Home</Link>
        </li>
        <li>
          <Link to="/farm">Farms</Link>
        </li>
        <li>
          <Link to="/field">Fields</Link>
        </li>
        <li>
          <Link to="/machine">Machines</Link>
        </li>
        <li>
          <Link to="/processing">Processings</Link>
        </li>
        <AuthLinks>
          <Link to="/user/signin">Sign In</Link>
          <Link to="/user/signup">Register</Link>
          <Link to="#" onClick={handleLogout}>
            Logout
          </Link>
        </AuthLinks>
        {/* <li></li> */}
      </ul>
      <LogoutModal
        isOpen={isLogoutModalOpen}
        onClose={handleCancelLogout}
        onConfirm={handleConfirmLogout}
      >
        {modalMessage}
      </LogoutModal>
      </Container>
    </StyledNav>
  );
}