import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useAuth } from "../../../../contexts/AuthContext";
import useDecodeToken from "../../../../hooks/JWTdecode/UseDecodeToken";

export const useNavbarLogic = () => {
  const decodedToken =useDecodeToken();
  // const modalMessage = `${decodedToken?.username}${decodedToken?.role}`;
    const navigate = useNavigate();
    const [isLogoutModalOpen, setLogoutModalOpen] = useState(false);
    const { isAuthenticated, logout } = useAuth();
  
    const handleLogout = () => {
      setLogoutModalOpen(true);
    };
  
    const handleConfirmLogout = () => {
      logout();
      navigate("/user/signin");
      setLogoutModalOpen(false);
    };
  
    const handleCancelLogout = () => {
      setLogoutModalOpen(false);
    };
  
    return { isLogoutModalOpen, handleLogout, handleConfirmLogout, handleCancelLogout, isAuthenticated, decodedToken };
  };