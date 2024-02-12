import { Link } from "react-router-dom";
import LogoutModal from "../../modals/ConfirmModal/ConfirmModal";
import { Container } from "../../../../ui_elements/CommonStyledElements";
import { StyledNav, AuthLinks } from "./navbar.styles";
import { useNavbarLogic } from "./navbar.logic";

export default function Navbar() {
  const {
    // modalMessage,
    isLogoutModalOpen,
    handleLogout,
    handleConfirmLogout,
    handleCancelLogout,
    isAuthenticated,
    decodedToken,
  } = useNavbarLogic();
  return (
    <StyledNav>
      <Container>
        <ul>
          {isAuthenticated && (
            <>
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
              <li>
                <Link to="/crop">Crops</Link>
              </li>
              <li>
                <Link to="/processing-type">Processing Types</Link>
              </li>
              <li>
                <Link to="/soil">Soils</Link>
              </li>
            </>
          )}

          <AuthLinks>
            {!isAuthenticated && <Link to="/user/signin">Sign In</Link>}
            {!isAuthenticated && <Link to="/user/signup">Sign Up</Link>}
            {isAuthenticated && (
              <Link to="#" onClick={handleLogout}>
                Profile
              </Link>
            )}
          </AuthLinks>
        </ul>
        <LogoutModal
          isOpen={isLogoutModalOpen}
          onClose={handleCancelLogout}
          onConfirm={handleConfirmLogout}
        >
          {`Username: ${decodedToken?.username}`}
          <br />
          {`Role: ${decodedToken?.role}`}
        </LogoutModal>
      </Container>
    </StyledNav>
  );
}
